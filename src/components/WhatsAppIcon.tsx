import whatsappIcon from "@/assets/whatsapp-icon.jpg";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <img
      src={whatsappIcon}
      alt="WhatsApp"
      className={className}
    />
  );
}
