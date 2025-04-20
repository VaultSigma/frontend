"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CheckCircle, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

import { useConversation } from "@11labs/react";
import { useCallback } from "react";

export default function Home() {
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "omhyuOcbksDuDEfaXpZJ", // Replace with your agent ID
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const plans = [
    {
      name: "AI-Driven Fund Rebalancing",
      features: [
        "Automated Strategy Execution: Dynamically move funds between pools based on APY and volume analysis.",
        "LLM-Powered Recommendations: Use text embeddings and large language models to guide rebalancing decisions.",
        "Adaptive Allocation: Continuously optimize pool allocations in response to market changes."
      ]
    },
    {
      name: "Liquidity Pool Intelligence",
      features: [
        "APY & Volume Analysis: Ingest real-time data from Swell Chain pools to calculate optimal returns.",
        "Strategy Registry: Maintain and test multiple AI strategies before deployment.",
        "Pool Metadata Embedding: Convert textual insights into vector embeddings for LLM-driven evaluations.",
        "Custom Strategy Filters: Allow users to choose risk preferences and strategy constraints."
      ]
    },
    {
      name: "User Vaults & Yield Optimization",
      features: [
        "Decentralized Vaults: Users deposit into AI-managed vaults with auto-rebalancing built in.",
        "Transparent Returns: Track performance and rebalancing history on-chain.",
        "Smart Fee Model: Performance-based fee structure to align with user gains.",
        "Non-Custodial Access: Users retain control over assets with secure withdrawal mechanisms."
      ],
    },
  ];  
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                    <Image src={Logo} width={150} height={100} alt="Logo" />
                </Link>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="https://github.com/VaultSigma">Docs</Link>
              </nav>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400  hover:bg-blue-900/50"
                >
                  <Link href="#dashboard" className="inactive">Dashboard</Link>
                </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Decentralized AI-Driven Asset Management on Swell Chain
              </h1>

              <p className="mt-6 text-lg text-blue-200">
              Sigma Finance is a decentralized protocol built on Swell Chain that leverages AI to dynamically rebalance assets across liquidity pools. By analyzing APY and volume data alongside large language model recommendations, Sigma optimizes fund allocation with transparency and efficiency.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Learn more with our AI
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Say Hi to our AI</AlertDialogTitle>
                        <AlertDialogDescription>
                          Converse smoothly with our AI to learn more about SigmaFi.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <Button
                          onClick={startConversation}
                          disabled={conversation.status === "connected"}
                          size="lg"
                          className="border-blue-400  hover:bg-blue-900/50"
                          >
                          Start Conversation
                        </Button>
                        <AlertDialogCancel
                            onClick={stopConversation}
                            disabled={conversation.status !== "connected"}
                        >
                            End Conversation
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400  hover:bg-blue-900/50"
                >
                  <Link href="https://github.com/VaultSigma">Github</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader className="items-center">
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
