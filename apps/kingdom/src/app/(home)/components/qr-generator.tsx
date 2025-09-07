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
import crownImage from "../../../../public/crown_trans.png";
import scrollTrans from "../../../../public/scroll_trans.png";
import Image from "next/image";
import { generateQrCode } from "@/src/server-actions/generate-qr-code";

const userRank = "citizen";
const remainingScrolls: number = 3;
const scrollsUsed = 0;

export const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const remainingScrolls = 3;

  const createQRCode = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);

    try {
      const formattedText = text.trim();

      const newQrCode = await generateQrCode(formattedText);

      setQrCode(newQrCode);
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
    if (!qrCode) return;

    const link = document.createElement("a");
    link.download = `royal-scroll-${Date.now()}.${format}`;
    link.href = qrCode;
    link.target = "_blank";
    link.click();

    /* toast({
      title: "🏰 Download Started",
      description: `Your royal scroll ${format.toUpperCase()} is being downloaded!`,
    }); */
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        if (text.trim() && !isGenerating) {
          createQRCode();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [text, isGenerating]);

  return (
    <div className='mb-20'>
      <div className='text-center mb-8'>
        <div className='flex justify-center mb-4'>
          <div className='animate-float'>
            <div className='p-4'>
              <Image src={crownImage} alt='Crown' height={100} />
            </div>
          </div>
        </div>
        <h2 className='text-4xl font-bold mb-4 text-balance text-foreground'>
          Welcome to Royal Scrolls
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
              <Image
                src={scrollTrans}
                alt='scroll'
                height={30}
                className='mr-2'
              />
              {remainingScrolls} Royal Scroll
              {/* {remainingScrolls === 1 ? "" : "s"} Remaining */}
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
              Commission Your Scroll
            </CardTitle>
            <CardDescription>
              Tell the royal scribes what information to encode in your scroll
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            {/*             
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
            */}
            <div className='space-y-2'>
              <Label htmlFor='content' className='text-card-foreground'>
                Your Commission
              </Label>
              <Textarea
                ref={textareaRef}
                id='content'
                placeholder={"Enter your royal decree..."}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className='resize-none transition-all focus:ring-2 border-border focus:border-accent bg-input text-foreground'
              />
            </div>

            <Button
              onClick={createQRCode}
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
                <>Become a Knight for More</>
              ) : (
                <>Create Royal Scroll!</>
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
            {qrCode ? (
              <div className='space-y-4 animate-in fade-in-50 duration-500'>
                <div className='flex justify-center p-6 bg-white rounded-lg border-2 border-dashed border-accent/50 transition-all hover:border-accent'>
                  <Image
                    src={qrCode}
                    height={512}
                    width={512}
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
              <div className='flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-border rounded-lg transition-all hover:border-accent/60'>
                <div className='mb-4'>
                  <Image
                    src={scrollTrans}
                    alt='scroll'
                    height={30}
                    className='mr-2'
                  />
                </div>
                <p className='text-muted-foreground text-pretty mb-2'>
                  Your royal scroll will be crafted here by the kingdom's finest
                  scribes
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
