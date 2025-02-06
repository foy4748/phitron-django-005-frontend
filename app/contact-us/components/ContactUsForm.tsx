import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUsForm() {
  return (
    <>
      <GridSystem className="my-24">
        <Col className={"md:col-span-6 lg:col-span-6"}>
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-2xl font-bold">Get in Touch</h3>
            </CardHeader>
            <CardContent>
              <div className="text-container space-y-4">
                <p className="text-justify">
                  If you have any questions, comments, or concerns, we would
                  love to hear from you. Our team is dedicated to providing the
                  best possible service and we are here to assist you in any way
                  we can. Please use the contact form to reach out to us and we
                  will get back to you as soon as possible.
                </p>
                <p>Alternatively, you can contact us via:</p>
                <ul>
                  <li>
                    <span className="font-bold">Email:</span>{" "}
                    faisal.rahman.4748.ph@gmail.com
                  </li>
                  <li>
                    <span className="font-bold">Phone:</span> +1 234 567 890
                  </li>
                  <li>
                    <span className="font-bold">Address:</span> Rangpur,
                    Bangladesh
                  </li>
                </ul>
                <p>We look forward to hearing from you!</p>
              </div>
            </CardContent>
          </Card>
        </Col>
        <Col className={"md:col-span-6 lg:col-span-6"}>
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-2xl font-bold">Leave a Message</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                />
                <Button>Send message</Button>
              </div>
            </CardContent>
          </Card>
        </Col>
      </GridSystem>
    </>
  );
}
