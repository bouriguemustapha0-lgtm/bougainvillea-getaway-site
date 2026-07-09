import whatsappIcon from "@/assets/whatsapp-icon.png.asset.json";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <img
      src={whatsappIcon.url}
      alt="WhatsApp"
      className={className}
    />
  );
}
