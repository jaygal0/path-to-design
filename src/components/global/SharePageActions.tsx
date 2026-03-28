"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Link2, Linkedin } from "lucide-react";
import { SiX } from "@icons-pack/react-simple-icons";

import { Button } from "../ui/button";

interface SharePageActionsProps {
  title?: string;
  className?: string;
}

export function SharePageActions({
  title = "Share this page",
  className,
}: SharePageActionsProps) {
  const [copied, setCopied] = useState(false);
  const [linkedinCopied, setLinkedinCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  async function handleCopyLink() {
    if (!shareUrl) return;

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function handleLinkedInShare() {
    if (!shareUrl) return;

    const shareMessage = `I found this on Path to Design: ${shareUrl}`;

    await navigator.clipboard.writeText(shareMessage);
    setLinkedinCopied(true);
    window.setTimeout(() => setLinkedinCopied(false), 2000);
    window.open(linkedinShareUrl, "_blank", "noopener,noreferrer");
  }

  const xShareUrl = shareUrl
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "I found this on Path to Design.",
      )}&url=${encodeURIComponent(shareUrl)}`
    : "#";

  const linkedinShareUrl = shareUrl
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl,
      )}`
    : "#";

  return (
    <div className={className}>
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="mt-3 flex gap-3">
        <Button asChild variant="outline" size="icon" aria-label="Share on X">
          <Link href={xShareUrl} target="_blank" rel="noreferrer">
            <SiX className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Share on LinkedIn"
          onClick={handleLinkedInShare}
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <div className="relative">
          {copied && (
            <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-sm">
              Copied
            </div>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopyLink}
            aria-label={copied ? "Link copied" : "Copy link"}
            title="Copy link"
          >
            <Link2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
