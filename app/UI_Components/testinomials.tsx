"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Testinomials() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-in-up">What Our Customers Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl animate-fade-in-up">
            Hear from real customers about their experience with our stunning jewelry.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 animate-fade-in-up">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
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
            &quot;The Acme Engagement Ring I purchased from your store is absolutely stunning. The craftsmanship and
              attention to detail are truly remarkable. I couldn&apos;t be happier with my purchase.&quot;
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Alex Smith</h3>
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
            &quot;I recently purchased a pair of Acme Diamond Earrings for my wife&apos;s birthday, and she absolutely loves
              them. The quality and sparkle are truly exceptional. I highly recommend Acme Jewelry to anyone looking for
              a special gift.&quot;
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center">
              <Avatar className="mr-4 h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Emily Parker</h3>
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
            &quot;I recently purchased the Acme Bangle Bracelet, and I&apos;m absolutely in love with it. The craftsmanship is
              impeccable, and the design is both elegant and modern. It&apos;s the perfect accessory to elevate any outfit.&quot;
            </p>
          </div>
        </div>
        <div className="mt-12 text-center animate-fade-in-up">
          <Button size="lg">Explore Our Collection</Button>
        </div>
      </div>
    </section>
  )
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
  )
}
