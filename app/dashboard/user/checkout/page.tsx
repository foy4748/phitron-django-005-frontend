"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { FormEvent, useEffect, useState } from "react";
import { TCartItem } from "@/types/cart";
import { handlePurchase } from "../cart/components/PurchaseButton";
import { useSession } from "next-auth/react";
import { getCartItems } from "@/actions/cart/getCartItems";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const [data, setData] = useState<TCartItem[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  useEffect(() => {
    getCartItems().then((d: TCartItem[]) => {
      setData(d);
      const _totalCost = d?.reduce(
        (acc, curr) =>
          Number(curr?.product?.unit_price) * Number(curr?.quantity) + acc,
        0
      );
      setTotalCost(_totalCost);
    });
  }, []);
  const { data: session } = useSession();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await handlePurchase();
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Shipping &amp; Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  readOnly
                  placeholder="John Doe"
                  value={`${session?.user?.first_name} ${session?.user?.last_name}`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  readOnly
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={session?.user?.email}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                required
                id="address"
                placeholder="123 Main St, Anytown USA"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="flex-1" type="submit">
              Payment
            </Button>
          </CardFooter>
        </form>
      </Card>
      <main className="container mx-auto my-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="mt-4 space-y-4">
            {data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950"
                >
                  <Image
                    src={item?.product?.image_url}
                    width={80}
                    height={80}
                    alt="Product Image"
                    className="rounded-md"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      {item?.product?.product_name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item?.product?.category?.category}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p>
                      ${item?.product?.unit_price} ✖ {item?.quantity}{" "}
                      {item?.product?.unit_name == "n"
                        ? ""
                        : item?.product?.unit_name}{" "}
                    </p>
                  </div>
                  <div className="text-right font-medium">
                    <p>Price:</p>
                    <p>
                      $
                      {Number(item?.product?.unit_price) *
                        Number(item?.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${totalCost}</span>
              </div>
              {/*
              <div className="flex items-center justify-between">
                <span>Taxes</span>
                <span>${(totalCost * 0.2).toFixed(2)}</span>
              </div>*/}
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>${totalCost}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
