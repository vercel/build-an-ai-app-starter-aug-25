"use client";

import { MessageList } from "./message-list";
import { Button } from "@/components/ui/button";
import messages from "./messages.json";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="mx-auto max-w-2xl pt-8">
      <div className="flex space-x-4 items-center mb-2">
        <h3 className="font-bold">Comments</h3>
        <Button
          variant={"secondary"}
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            // generate summary
            setLoading(false);
          }}
        >
          Summary
        </Button>
      </div>
      <MessageList messages={messages} />
    </main>
  );
}
