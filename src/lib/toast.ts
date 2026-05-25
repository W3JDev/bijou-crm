/**
 * bijou toast helpers — Manglish-flavoured sonner wrappers.
 *
 * WHY THIS FILE:
 * wacrm uses raw sonner calls scattered across the codebase.
 * This file centralises all user-facing strings so they can be
 * consistently Manglish-voiced per the Bijou brand spec.
 *
 * USAGE:
 *   import { bijouToast, toastError, toastSuccess } from "@/lib/toast";
 *
 *   bijouToast.error();                  // default: "Aiyo, server hiccup..."
 *   toastError.walao();                  // specific preset
 *   bijouToast.success("Profile saved"); // custom message with Bijou styling
 *
 * DO NOT call sonner's toast() directly for user-facing messages.
 * Use these helpers so the brand voice stays consistent.
 */

import { toast } from "sonner";

// ── Shared style tokens ────────────────────────────────────────────
const BASE_STYLE: React.CSSProperties = {
  background: "rgba(13, 61, 61, 0.95)",   // Bijou Deep Green glass
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  color: "#faf7f0",                        // Bijou Cream
  fontFamily: "var(--font-sans)",
};

const SUCCESS_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  border: "1px solid rgba(212, 175, 55, 0.5)",  // Gold border — emphasis
  color: "#e8c860",                              // Gold Soft text
};

const ERROR_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  border: "1px solid rgba(239, 68, 68, 0.45)",
};

const WARN_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  border: "1px solid rgba(212, 175, 55, 0.35)",
  color: "#e8c860",
};

const INFO_STYLE: React.CSSProperties = {
  ...BASE_STYLE,
  border: "1px solid rgba(212, 175, 55, 0.2)",
};

// ── Core helper ───────────────────────────────────────────────────
export const bijouToast = {
  error: (msg?: string) =>
    toast.error(msg ?? "Aiyo, server hiccup. Try again boss?", {
      style: ERROR_STYLE,
    }),

  success: (msg?: string) =>
    toast.success(msg ?? "Done already! Boleh!", {
      style: SUCCESS_STYLE,
    }),

  loading: (msg?: string) =>
    toast.loading(msg ?? "Tengah proses... wait ah.", {
      style: INFO_STYLE,
    }),

  warning: (msg?: string) =>
    toast.warning(msg ?? "Eh, something not right la. Check check?", {
      style: WARN_STYLE,
    }),

  info: (msg?: string) =>
    toast.info(msg ?? "Noted boss.", {
      style: INFO_STYLE,
    }),

  promise: <T,>(
    promise: Promise<T>,
    msgs: { loading: string; success: string; error: string },
  ) =>
    toast.promise(promise, {
      loading: msgs.loading,
      success: msgs.success,
      error: msgs.error,
      style: INFO_STYLE,
    }),
};

// ── Error presets ─────────────────────────────────────────────────
/** Named Manglish error presets. Use these over raw strings. */
export const toastError = {
  /** Generic server error */
  serverHiccup: () =>
    bijouToast.error("Aiyo, server hiccup. Try again boss?"),

  /** Unexpected client-side failure */
  walao: () =>
    bijouToast.error("Walao, that didn't work. Refresh and try again ya."),

  /** Something failed and we're investigating */
  gotError: () =>
    bijouToast.error("Got error already — we're checking now."),

  /** 401 / session expired */
  unauthorized: () =>
    bijouToast.error("Eh, need to log in first lah."),

  /** 404 / item deleted */
  notFound: () =>
    bijouToast.error("Cannot find la. Maybe deleted already?"),

  /** Save/update failure */
  saveFailed: () =>
    bijouToast.error("Save fail leh. Try one more time?"),

  /** Network / fetch timeout */
  networkTimeout: () =>
    bijouToast.error("Slow la internet. Check your connection?"),

  /** Permission denied */
  noPermission: () =>
    bijouToast.error("Tak boleh la. No permission for this."),

  /** WhatsApp device disconnected */
  whatsappDisconnected: () =>
    bijouToast.error("WhatsApp tercabut already. Need to scan QR again."),
};

// ── Success presets ───────────────────────────────────────────────
export const toastSuccess = {
  saved: () => bijouToast.success("Saved already! Boleh!"),
  sent: () => bijouToast.success("Sent! Message dah keluar."),
  created: () => bijouToast.success("Done! New one created."),
  deleted: () => bijouToast.success("Removed. Gone already."),
  connected: () => bijouToast.success("Connected! WhatsApp siap."),
  invited: () => bijouToast.success("Invite sent. They'll get email."),
  copied: () => bijouToast.success("Copied! Paste wherever you want."),
  imported: () => bijouToast.success("Imported! Check your contacts."),
};
