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

export function convertToNumber(value: string): number {
    // 末尾の単位を確認
    const unit = value.slice(-1).toUpperCase();

    // 数字部分を抽出
    const number = parseFloat(value.slice(0, -1));

    // 単位に応じて計算
    switch (unit) {
        case 'B':
            return number * 1_000_000_000; // 1B = 1,000,000,000
        case 'M':
            return number * 1_000_000; // 1M = 1,000,000
        case 'K':
            return number * 1_000; // 1K = 1,000
        default:
            return parseFloat(value); // 単位がない場合はそのまま数字に変換
    }
}
