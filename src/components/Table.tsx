import { useCallback, useEffect, useState } from "react";
import { getTransactions } from "../services";
import { displayColumns } from "../config";

export const Table = () => {
  const [transactions, setTransactions] = useState();

  const initializeTransactions = useCallback(async () => {
    const trans = await getTransactions();
    setTransactions(trans);
  }, []);

  useEffect(() => {
    if (!transactions) initializeTransactions();
  }, [initializeTransactions, transactions]);

  return (
    <table className="table table-compact">
      <thead>
        <tr>
          {displayColumns.map(({ header }) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(transactions as any)?.map((trans: any) => (
          <tr>
            {displayColumns.map(({ valueKey }) => (
              <td>{trans[valueKey] || "-"}</td>
            ))}
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};
