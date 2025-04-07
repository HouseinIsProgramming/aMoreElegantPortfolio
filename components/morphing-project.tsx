import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";
import Link from "next/link";

export function MorphingDialogProject() {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "16px",
        }}
        className="border border-gray-200/60 bg-white"
      >
        <div className="flex items-center gap-4 p-3">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-48 aspect-[2/3] object-cover object-top"
            style={{
              borderRadius: "12px",
            }}
          />
          <div className="flex flex-col items-start justify-between !h-full gap-8">
            <MorphingDialogTitle className="!text-2xl drop-shadow-lg font-medium text-black sm:text-xs">
              PixelDoodle
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="!text-lg flex flex-col gap-4 text-left text-gray-600 sm:text-xs">
              Turn your hand written notes into images with transparent
              backgrounds in bulk.
              <div className="space-x-2">
                <Button asChild className="">
                  <Link target="_blank" href={"#"}>
                    smth
                  </Link>
                </Button>
                <Button asChild variant="outline" className="relative z-50">
                  <Link target="_blank" href={"#"}>
                    smth
                  </Link>
                </Button>
              </div>
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh] overflow-y-scroll" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt="What I Talk About When I Talk About Running - book cover"
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <MorphingDialogTitle className="!text-2xl drop-shadow-lg font-medium text-black sm:text-xs">
                  PixelDoodle
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="!text-lg flex flex-col gap-4 text-left text-gray-600 sm:text-xs">
                  Turn your hand written notes into images with transparent
                  backgrounds in bulk.
                  <div className="space-x-2">
                    <Button className="">something</Button>
                    <Button variant="outline" className="">
                      something
                    </Button>
                  </div>
                </MorphingDialogSubtitle>
                <div className="mt-4 text-sm text-gray-700">
                  <p>
                    There is something about having a pen in my hand that makes
                    able to think clearer, when I write something down I am a
                    lot more likely to be able to understand it better remember
                    it longer.
                  </p>
                  <p>
                    Spaced repeatition has been proven time and time again to be
                    one of the effective methods of learning something new.
                  </p>
                  <p>
                    Problem is: finding hand written notes is just
                    innefficent...
                  </p>
                  <p>
                    And this is why PixelDoodle was made, I can just write
                    something down, take a picture of it, then using
                    PixelDoolde, remove the background and be left with was
                    written down. and it can handle multiple images aswell.
                  </p>
                  <p>
                    now these pictures can be used within Notion/Obsidian (with
                    dark and light modes support) and be able to use the sorting
                    and searching functions within those programs, which are
                    undoublty better that looking through hand written notes.
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-red-700 dark:text-white dark:bg-gray-700 bg-gray-200 rounded-full p-1" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
