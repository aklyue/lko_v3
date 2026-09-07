export { default as documentsReducer } from "./model/slices/slice";
export * from "./model/slices/slice";

export { default as DocumentRow } from "./ui/DocumentRow/DocumentRow";
export { default as DocumentPreview } from "./ui/DocumentPreview/DocumentPreview";

export { DOCUMENT_TYPES, MOCK_ORDER_HISTORY, DOCUMENT_TEMPLATES } from "./model/const/constants";
export { getStatusColor } from "./lib/utils/getStatusColor";
