import React from "react";

// formatNumber関数
export function formatNumber(num: number): string {
    if (num >= 10000 && num < 100000) {
        return parseFloat((num / 10000).toFixed(1)) + "万";
    }
    if (num > 99999 && num < 100000000) {
        return (num / 10000).toFixed(0) + "万";
    }
    if (num > 9999999 && num < 1000000000) {
        return (num / 100000000).toFixed(1) + "億";
    }
    if (num > 999999999) {
        return (num / 100000000).toFixed(0) + "億";
    }
    return num.toString();
}
