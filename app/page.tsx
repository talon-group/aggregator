"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import announcements, { Announcement } from './components/Content/Announcements';
import { Nullvier } from '@/components/nullvier';

export default function Home() {
  // const { isAuthenticated } = getKindeServerSession();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     if (await isAuthenticated()) {
  //       redirect("/dashboard");
  //     }
  //   };
  //   checkAuth();
  // }, [isAuthenticated]);

  const handleAddToFeed = (url: string) => {
    console.log("Adding URL to feed:", url);
  };

  return (
    <>
      <section className="flex items-center justify-center bg-background h-[90vh]">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div>

              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                Nordkurve 12 e.V.
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                We are Bayer.
              </p>
            </div>

            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <RegisterLink>
                <Button size="lg" className="w-full">
                  Connect your account
                </Button>
              </RegisterLink>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Nullvier />
      </section>
    </>
  );
}
