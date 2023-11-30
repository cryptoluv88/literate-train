class Transfer {
    balances: Record<string, number> = {};

    transfer(from: string, to: string, value: number): void {
        if (this.balances[from] >= value) {
            this.balances[from] -= value;
            this.balances[to] += value;
        }
    }
}
