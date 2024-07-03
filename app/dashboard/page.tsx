import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="size-6 text-green-500 " />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$100.00</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="size-6 text-blue-500 " />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">
              Toal Sales on shoeMan
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="size-6 text-purple-500 " />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50</p>
            <p className="text-xs text-muted-foreground">
              Toal Products created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="size-6 text-orange-500 " />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">
              Toal Users signed up
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Kafui</p>
                <p className="text-muted-foreground text-sm">
                  someone@gamil.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Kafui</p>
                <p className="text-muted-foreground text-sm">
                  someone@gamil.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Kafui</p>
                <p className="text-muted-foreground text-sm">
                  someone@gamil.com
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;
