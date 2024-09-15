import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Testimonials() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl text-blue-500 font-bold tracking-tight md:text-4xl animate-fade-in-up">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl animate-fade-in-up">
            Hear from real customers in Pakistan about their experience with our
            stunning jewelry.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 animate-fade-in-up">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="Sarah" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sana Ahmed</h3>
                <div className="flex items-center gap-1 text-primary">
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &quot;I ordered a ring for my Picnic, and it &apos;s absolutely
              stunning. The details and craftsmanship are truly remarkable.
              I&apos;m so happy with my purchase&quot;
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="Ali" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Ali Raza</h3>
                <div className="flex items-center gap-1 text-primary">
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &quot;I bought a bracelet for my sister, and she absolutely loved
              it! The quality is fantastic, and the design is modern yet
              traditional.&quot;
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="Fatima" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Fatima Khan</h3>
                <div className="flex items-center gap-1 text-primary">
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                  <StarIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              &quot;I recently bought earrings from this store, and the quality
              is just as promised. I&apos;ll definitely be recommending this to
              my friends and family.&quot;
            </p>
          </div>
        </div>
        <div className="mt-12 text-center animate-fade-in-up ">
          <Link href="/Contact-us">
            <Button
              size="default"
              className="w-fit px-10 text-lg bg-blue-700 hover:bg-blue-900"
            >
              Your Feedback
            </Button>
          </Link>
          <p className="mt-4 text-muted-foreground">
            We value your feedback. Click the button above to rate your
            experience with our jewelry.
          </p>
        </div>
      </div>
    </section>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
