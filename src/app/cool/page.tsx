import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function Kewl() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mybg text-white gap-5">
      {/* 
      Write something unique about you here! 
      It could be a club you're part of, a weird skill you have, or something special that happened to you.
      Feel free to put links, images, whatever! 
      Don't worry about styling- we aren't grading you on this- it's just to get to know you better! :) 
      */}
        <h2>
            My name is <b>Angelina</b> and this is my favorite shade of purple! Nice to meet you, <b>I am a second year computer science major with with threads in Info & Media :))</b> I participated in my first game jam this summer, you should check it out! In the span of 72 hours, I created a <b>cooking game where you serve Octo-aliens pancakes.</b>
        </h2>

        <a href="https://pixieansc.itch.io/octo-cooked" target="_blank">
            <Button>Play Octo-Cooked!</Button>
        </a>
    </div>
  );
}
