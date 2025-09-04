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

export default function QRScrolls() {
  return (
    <div className='min-h-screen bg-background relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className='absolute animate-float-up'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
            }}
          >
            <div
              className='bg-accent/20 rounded-full'
              style={{
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
              }}
            />
          </div>
        ))}

        <div className='absolute top-20 left-10 animate-sparkle'>
          <div className='text-accent/50 text-lg'>⚔️</div>
        </div>
        <div
          className='absolute top-40 right-20 animate-sparkle'
          style={{ animationDelay: "1s" }}
        >
          <CastleIcon className='h-6 w-6 text-accent/60' />
        </div>
        <div
          className='absolute bottom-40 left-20 animate-sparkle'
          style={{ animationDelay: "2s" }}
        >
          <div className='text-accent/45 text-sm'>🏰</div>
        </div>
        <div className='absolute top-60 left-1/2 animate-float'>
          <div className='w-3 h-3 bg-accent/30 rounded-full animate-mystical-pulse'></div>
        </div>
        <div
          className='absolute bottom-60 right-1/3 animate-float'
          style={{ animationDelay: "1.5s" }}
        >
          <div className='w-2 h-2 bg-primary/40 rounded-full animate-mystical-pulse'></div>
        </div>
      </div>

      <Header />

      <main className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <QRGenerator />

          {/* Features Section */}
          <Features />

          {/* Pricing Section */}
          <Pricing />

          {/* Use Cases Section */}
          <UseCase />

          {/* FAQ Section */}
          <FAQ />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
