"use client"

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import announcements, { Announcement} from "./Announcements";
import { FaBookmark } from "react-icons/fa";

interface PostCardProps {
  announcements: Announcement[];
}

export function PostCard({ announcements }: PostCardProps) {  
  return (
    <div className="flex justify-center py-4">
      <div className="px-2 max-w-screen-lg w-full">
        {announcements.map((announcement, index) => (
          <div key={index} className="w-full mb-4">
            <Card className="w-full border border-gray-200 rounded-lg">
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="overflow-hidden rounded-full border border-gray-200">
                    <img
                      alt="Avatar"
                      height={40}
                      src="https://i.pravatar.cc/48?img=13"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width={40}
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{announcement.author}</p>
                    <p className="text-gray-500 dark:text-gray-400">Posted on {announcement.date}</p>
                  </div>
                  <div className="flex items-center">
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-left">
                  <p>{announcement.text}</p>
                  <div className="flex flex-wrap -mx-1.5">
                    {announcement.tag && announcement.tag.split(", ").map((tag, index) => (
                      <span key={index} className="mx-1.5 text-sm text-gray-500 dark:text-gray-400">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}