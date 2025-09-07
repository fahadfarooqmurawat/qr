"use client";

import { Metadata } from "next";
import { useState, useEffect, useRef } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Textarea } from "@workspace/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Badge } from "@workspace/ui/components/badge";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import {
  BarChart3Icon,
  CastleIcon,
  CheckIcon,
  CrownIcon,
  DownloadIcon,
  EyeIcon,
  GlobeIcon,
  HistoryIcon,
  ScrollIcon,
  ShieldIcon,
  SmartphoneIcon,
  SwordIcon,
  UsersIcon,
} from "@/src/components/icons";
import { Features } from "./components/features";
import { Pricing } from "./components/pricing";
import { UseCase } from "./components/use-case";
import { FAQ } from "./components/faq";
import { QRGenerator } from "./components/qr-generator";
// import { toast } from "@/hooks/use-toast";

/* export const metadata: Metadata = {
  title: "Royal Scrolls - Kingdom's Finest QR Code Scribes",
  description:
    "Create professional QR codes with the kingdom's most trusted royal scribes. Start as a citizen with 3 free scrolls, become a knight for unlimited access.",
}; */

interface QRHistoryItem {
  id: number;
  content: string;
  type: string;
  formattedContent: string;
  dataUrl: string;
  createdAt: string;
}

export default function Home() {
  return (
    <div className='min-h-screen bg-background relative overflow-hidden'>
      <Header />

      <main className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <QRGenerator />

          <Features />

          <Pricing />

          <UseCase />

          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}
