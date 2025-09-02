import { NextResponse } from "next/server";
import { store } from "../store";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const ok = store.remove(params.id);
  if (!ok) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
