/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import packageInfo from "../../package.json";
const VERSION = packageInfo.version;
const link = "text-th-link hover:underline hover:text-th-linkHover "
const AboutPage = ({ changelog }) => {
  return (
    <div className="h-screen mx-4 -mt-16">
      <Head>
        <title>freeddit · about</title>
      </Head>
      <div className="h-full text-justify text-th-text ">
        <div className="flex flex-col justify-center max-w-xl min-h-full gap-4 mx-auto space-y-1 overflow-y-scroll scrollbar-none ">
          <p className="">
            <b>FREEDDIT</b> is a privacy-first, open-source alternative to Reddit. No ads, no logins, no limits. Browse subreddits, follow users, and access public data freely. Designed for both users and developers, FREEDDIT eliminates the clutter and restrictions of traditional Reddit access.
 
          </p>

          <p className="">
            This site <b>is not affiliated with Reddit</b>. All content
            on this site is fetched from the public <a href="https://www.reddit.com/dev/api/">Reddit API</a>.
          </p>

          <p>For feature requests, bug reports, or collaborations, visit <strong><a href="https://freeddit.com">freeddit.com</a></strong> or join the discussion:</p>
          <ul>
            <li><strong>Telegram:</strong> <a href="https://t.me/freeddit">@freeddit</a></li>
            <li><strong>Twitter:</strong> <a href="https://x.com/freeddit">x.com/freeddit</a></li>
            <li>Open an issue on <strong>GitHub</strong> or contact the team directly.</li>
          </ul>

          <p className="">
            <Link href={"/changelog"}>
              <a className="flex flex-wrap justify-between pt-5 font-semibold hover:underline">
                <h4>v{VERSION}</h4>
                <h4>See Changelog</h4>
              </a>
            </Link>
          </p>
        </div>
        <div className="absolute left-0 w-full bottom-5 sm:bottom-20">
          <div className="flex items-center justify-between max-w-xl mx-4 sm:mx-auto">
            <a
              href="https://github.com/Gyarbij/freeddit"
              target="_blank"
              rel="noreferrer"
              className="hover:cursor-pointer"
            >
              <AiOutlineGithub className="w-12 h-12 transition-all hover:scale-110" />
            </a>
            <a
              href="https://t.me/freeddit"
              target="_blank"
              rel="noreferrer"
              className="hover:cursor-pointer"
            >
              <FaTelegram className="w-12 h-12 transition-all hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
