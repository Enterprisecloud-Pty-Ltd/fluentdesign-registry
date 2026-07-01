import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  return (
    <main className="min-h-svh bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <Badge className="w-fit" variant="outline">
            @fd
          </Badge>
          <div className="flex flex-col gap-2">
            <h1 className="text-title-1">FluentDesign</h1>
            <p className="max-w-2xl text-body-1 text-muted-foreground">
              Fluent 2 theme tokens published as a shadcn/ui registry for
              create-ec-app.
            </p>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Registry Preview</CardTitle>
            <CardDescription>
              Core shadcn components using the FluentDesign theme.
            </CardDescription>
            <CardAction>
              <Button size="sm">Primary</Button>
            </CardAction>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="account">Account name</Label>
                <Input id="account" defaultValue="Contoso Operations" />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="grid gap-1">
                  <span className="text-body-1-strong">Dark mode ready</span>
                  <span className="text-caption-1 text-muted-foreground">
                    Uses the shadcn semantic variable contract.
                  </span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Separator className="hidden h-auto md:block" orientation="vertical" />

            <div className="flex flex-col gap-3">
              <Button>Save changes</Button>
              <Button variant="secondary">Review later</Button>
              <Button variant="outline">Open registry</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
