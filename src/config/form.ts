import {
  FormType,
  System,
  CategoryType,
  ImpactType,
  IssueType,
} from "../types";
import { firstCharToUpperCase } from "../utils";

export const formInputs = [
  [
    {
      name: "date",
      label: "Date",
      type: FormType.DATE,
    },
    {
      name: "startDate",
      label: "Start",
      type: FormType.TIME,
    },
    {
      name: "endDate",
      label: "End",
      type: FormType.TIME,
    },
  ],
  [
    {
      name: "total",
      label: "Total",
      type: FormType.TIME,
      disabled: true,
    },
    {
      name: "issue",
      label: "Issue",
      type: FormType.TEXT,
    },
    {
      name: "cause",
      label: "Cause",
      type: FormType.TEXT,
    },
    { name: "resolve", label: "Resolve", type: FormType.TEXT },
  ],
  [
    {
      name: "system",
      label: "System",
      type: FormType.DROPDOWN,
      options: [
        ...Object.values(System).map((value) => ({
          value,
          label: firstCharToUpperCase(value),
        })),
      ],
    },
    {
      name: "category",
      label: "Category",
      type: FormType.DROPDOWN,
      options: [
        ...Object.values(CategoryType).map((value) => ({
          value,
          label: firstCharToUpperCase(value),
        })),
      ],
    },
    {
      name: "impactType",
      label: "Impact Type",
      type: FormType.DROPDOWN,
      options: [
        ...Object.values(ImpactType).map((value) => ({
          value,
          label: firstCharToUpperCase(value),
        })),
      ],
    },
  ],
  [
    {
      name: "issueType",
      label: "Issue Type",
      type: FormType.DROPDOWN,
      options: [
        ...Object.values(IssueType).map((value) => ({
          value,
          label: firstCharToUpperCase(value),
        })),
      ],
    },
    {
      name: "issuer",
      label: "Issuer",
      type: FormType.TEXT,
    },
  ],
  [
    {
      name: "owner",
      label: "Owner",
      type: FormType.TEXT,
    },
  ],
];
