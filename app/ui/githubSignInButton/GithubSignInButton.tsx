"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function GithubSignInButton() {
  return (
    <Button variant="outline" size="icon">
      <GithubIcon className="w-4 h-4" />
    </Button>
  );
}
