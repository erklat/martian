"use client";

import PostsProvider from "@/state-management/PostsProvider";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PostsProvider>{children}</PostsProvider>;
}
