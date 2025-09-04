import {
  CastleIcon,
  CrownIcon,
  DownloadIcon,
  ScrollIcon,
  SwordIcon,
} from "@/src/components/icons";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { useEffect, useRef, useState } from "react";

export const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [qrType, setQrType] = useState("text");
  const [scrollsUsed, setScrollsUsed] = useState(0);
  const [userRank, setUserRank] = useState<"citizen" | "knight">("citizen");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const remainingScrolls =
    userRank === "citizen" ? 3 - scrollsUsed : Number.POSITIVE_INFINITY;

  const formatContent = (content: string, type: string) => {
    switch (type) {
      case "email":
        return `mailto:${content}`;
      case "phone":
        return `tel:${content}`;
      case "url":
        if (!content.startsWith("http://") && !content.startsWith("https://")) {
          return `https://${content}`;
        }
        return content;
      case "wifi":
        return `WIFI:T:WPA;S:${content};P:password;;`;
      default:
        return content;
    }
  };

  const generateQRCode = async () => {
    if (!text.trim()) return;

    if (userRank === "citizen" && scrollsUsed >= 3) {
      /* toast({
        title: "🏰 Royal Scrolls Exhausted!",
        description:
          "You've used all 3 royal scrolls! Become a knight to get unlimited access.",
        variant: "destructive",
      }); */
      return;
    }

    setIsGenerating(true);
    try {
      const formattedContent = formatContent(text.trim(), qrType);

      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(formattedContent)}&color=9b1c30&bgcolor=ffffff`;

      setQrCodeUrl(qrApiUrl);

      if (userRank === "citizen") {
        const newScrollsUsed = scrollsUsed + 1;
        setScrollsUsed(newScrollsUsed);
        localStorage.setItem("qrScrollsUsed", newScrollsUsed.toString());

        const remainingScrolls = 3 - newScrollsUsed;
        if (remainingScrolls > 0) {
          /* toast({
            title: "🏰 Royal Scroll Created!",
            description: `Your scroll is ready! You have ${remainingScrolls} scroll${remainingScrolls === 1 ? "" : "s"} remaining.`,
          }); */
        } else {
          /* toast({
            title: "🏰 Final Scroll Created!",
            description:
              "That was your last scroll! Become a knight for unlimited access.",
          }); */
        }
      } else {
        /* toast({
          title: "⚔️ Knight's Scroll Created!",
          description: "Your royal scroll is ready for the kingdom!",
        }); */
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      /* toast({
        title: "Scroll Creation Failed",
        description:
          "The royal scribes couldn't create your scroll. Please try again.",
        variant: "destructive",
      }); */
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQRCode = (format: "png" | "svg") => {
    if (!qrCodeUrl) return;

    const formattedContent = formatContent(text.trim(), qrType);
    let downloadUrl = qrCodeUrl;

    if (format === "svg") {
      downloadUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&format=svg&data=${encodeURIComponent(formattedContent)}&color=9b1c30&bgcolor=ffffff`;
    }

    const link = document.createElement("a");
    link.download = `royal-scroll-${Date.now()}.${format}`;
    link.href = downloadUrl;
    link.target = "_blank";
    link.click();

    /* toast({
      title: "🏰 Download Started",
      description: `Your royal scroll ${format.toUpperCase()} is being downloaded!`,
    }); */
  };

  useEffect(() => {
    const savedScrolls = localStorage.getItem("qrScrollsUsed");
    if (savedScrolls) {
      setScrollsUsed(Number.parseInt(savedScrolls));
    }

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      } else if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (qrType === "text" || qrType === "url") {
        textareaRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    }, 100);
  }, [qrType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (text.trim() && !isGenerating) {
          generateQRCode();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [text, isGenerating]);

  return (
    <>
      <div className='text-center mb-8'>
        <div className='flex justify-center mb-4'>
          <div className='animate-float'>
            <div className='p-4 bg-primary rounded-full'>
              <CastleIcon className='h-16 w-16 text-primary-foreground' />
            </div>
          </div>
        </div>
        <h2 className='text-4xl font-bold mb-4 text-balance text-foreground'>
          🏰 Welcome to Royal Scrolls
        </h2>
        <p className='text-muted-foreground text-lg mb-4 text-pretty max-w-2xl mx-auto'>
          Enter the royal court and commission your QR code scrolls from the
          kingdom's finest scribes. Each scroll is crafted with medieval
          precision.
        </p>
        {userRank === "citizen" && (
          <div className='flex items-center justify-center gap-2 mb-6'>
            <Badge
              variant='secondary'
              className='text-lg px-4 py-2 bg-primary text-primary-foreground'
            >
              🏰 {remainingScrolls} Royal Scroll
              {remainingScrolls === 1 ? "" : "s"} Remaining
            </Badge>
          </div>
        )}
        <p className='text-xs text-muted-foreground mt-2'>
          Press{" "}
          <kbd className='px-1.5 py-0.5 text-xs bg-muted rounded border border-accent/30'>
            Ctrl
          </kbd>{" "}
          +{" "}
          <kbd className='px-1.5 py-0.5 text-xs bg-muted rounded border border-accent/30'>
            Enter
          </kbd>{" "}
          to commission your scroll
        </p>
      </div>
      <div className='grid lg:grid-cols-2 gap-8'>
        <Card className='h-fit transition-all hover:shadow-2xl border-border hover:border-accent/60 bg-card/80 backdrop-blur-sm'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-card-foreground'>
              <SwordIcon className='h-5 w-5 text-accent' />
              Commission Your Scroll
            </CardTitle>
            <CardDescription>
              Tell the royal scribes what information to encode in your scroll
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='qr-type' className='text-card-foreground'>
                Type of Scroll
              </Label>
              <Select value={qrType} onValueChange={setQrType}>
                <SelectTrigger className='border-border focus:border-accent bg-input'>
                  <SelectValue placeholder='Choose your scroll type' />
                </SelectTrigger>
                <SelectContent className='bg-popover border-border'>
                  <SelectItem value='text'>📜 Royal Decree</SelectItem>
                  <SelectItem value='url'>🌐 Kingdom Portal</SelectItem>
                  <SelectItem value='email'>📧 Royal Message</SelectItem>
                  <SelectItem value='phone'>📞 Court Communication</SelectItem>
                  <SelectItem value='wifi'>🏰 Castle Network</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='content' className='text-card-foreground'>
                Your Commission
              </Label>
              {qrType === "text" || qrType === "url" ? (
                <Textarea
                  ref={textareaRef}
                  id='content'
                  placeholder={
                    qrType === "url"
                      ? "https://example.com"
                      : "Enter your royal decree..."
                  }
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className='resize-none transition-all focus:ring-2 border-border focus:border-accent bg-input text-foreground'
                />
              ) : (
                <Input
                  ref={inputRef}
                  id='content'
                  placeholder={
                    qrType === "email"
                      ? "user@example.com"
                      : qrType === "phone"
                        ? "+1234567890"
                        : "Network details..."
                  }
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className='transition-all focus:ring-2 border-border focus:border-accent bg-input text-foreground'
                />
              )}
            </div>

            <Button
              onClick={generateQRCode}
              disabled={
                !text.trim() ||
                isGenerating ||
                (userRank === "citizen" && scrollsUsed >= 3)
              }
              className='w-full transition-all hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-2xl'
              size='lg'
            >
              {isGenerating ? (
                <>
                  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2' />
                  Scribes are working...
                </>
              ) : userRank === "citizen" && scrollsUsed >= 3 ? (
                <>
                  <CrownIcon className='h-4 w-4 mr-2' />
                  Become a Knight for More
                </>
              ) : (
                <>
                  <SwordIcon className='h-4 w-4 mr-2' />
                  Create Royal Scroll! 🏰
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className='h-fit transition-all hover:shadow-2xl border-border hover:border-accent/60 bg-card/80 backdrop-blur-sm'>
          <CardHeader>
            <CardTitle className='text-card-foreground'>
              Your Royal Scroll
            </CardTitle>
            <CardDescription>
              The kingdom's finest craftsmanship awaits
            </CardDescription>
          </CardHeader>
          <CardContent>
            {qrCodeUrl ? (
              <div className='space-y-4 animate-in fade-in-50 duration-500'>
                <div className='flex justify-center p-6 bg-white rounded-lg border-2 border-dashed border-accent/50 transition-all hover:border-accent'>
                  <img
                    src={qrCodeUrl || "/placeholder.svg"}
                    alt='Generated Royal Scroll'
                    className='max-w-full h-auto transition-transform hover:scale-105'
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <div className='flex gap-2'>
                  <Button
                    variant='outline'
                    className='flex-1 transition-all hover:scale-105 border-border hover:border-accent text-accent bg-transparent hover:bg-accent/10'
                    onClick={() => downloadQRCode("png")}
                  >
                    <DownloadIcon />
                    <span className='ml-2'>Download PNG</span>
                  </Button>
                  <Button
                    variant='outline'
                    className='flex-1 transition-all hover:scale-105 border-border hover:border-accent text-accent bg-transparent hover:bg-accent/10'
                    onClick={() => downloadQRCode("svg")}
                  >
                    <DownloadIcon />
                    <span className='ml-2'>Download SVG</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border rounded-lg transition-all hover:border-accent/60'>
                <div className='animate-float mb-4'>
                  <ScrollIcon />
                </div>
                <p className='text-muted-foreground text-pretty'>
                  Your royal scroll will be crafted here by the kingdom's finest
                  scribes
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
