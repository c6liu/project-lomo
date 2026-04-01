import type { DialogProps, ModalOverlayProps } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { Dialog as AriaDialog, Modal as AriaModal, composeRenderProps } from "react-aria-components";
import { modalDialogVariants, modalVariants } from "./modal.variants.ts";

/**
 * Props for the Modal component.
 */
export type ModalProps
	= & Pick<ModalOverlayProps, "className" | "style">
		& Pick<DialogProps, "role" | "aria-label" | "aria-labelledby" | "children" | "id">
		& VariantProps<typeof modalVariants>;

/**
 * A modal dialog component that overlays the main content.
 * Built on top of React Aria Components' Modal and Dialog.
 */
export function Modal({ size, role, className, children, style, ...props }: ModalProps) {
	return (
		<AriaModal
			style={style}
			className={composeRenderProps(className, cls =>
				modalVariants({ size, class: cls }))}
		>
			<AriaDialog role={role} className={modalDialogVariants({ size })} {...props}>
				{children}
			</AriaDialog>
		</AriaModal>
	);
}
