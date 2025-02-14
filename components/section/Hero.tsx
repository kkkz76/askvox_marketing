"use client";

import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";
import { PLATFORM_TYPE } from "../constants";
import Button from "../ui/Button";
import { createFileDownloadData, fetchLink } from "@/services/query";
import { useEffect, useState } from "react";

const Hero = () => {
  const [newLink, setNewLink] = useState("");
  useEffect(() => {
    const loadLink = async () => {
      const oldLink = await fetchLink();
      setNewLink(oldLink || "");
    };
    loadLink();
  }, []);

  async function onDownload(platform: PLATFORM_TYPE) {
    await createFileDownloadData(platform);
  }
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Multimedia Knowledge assistance
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Knowledge at your command
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed Echo, the AI-powered knowledge assistant, to deliver
              real-time information to gamers. Get instant answers, images, and
              videos without ever leaving your game—so you stay focused and in
              control.
            </p>
            <Link href={newLink} passHref>
              <Button
                onClick={async () => {
                  await onDownload(PLATFORM_TYPE.WINDOW);
                }}
                icon="/images/zap.svg"
              >
                Try it now
              </Button>
            </Link>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/hero.png"
              alt="hero"
              layout="responsive"
              width={1230}
              height={1230}
              className="max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
