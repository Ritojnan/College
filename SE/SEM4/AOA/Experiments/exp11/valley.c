#include <stdio.h>
int maxProfit(int* prices, int pricesS) {
	if (pricesS < 2) {
	return 0;
	}
	int min = prices[0];
	int max = 0;
	for (int i = 0; i < pricesS; i++) {
	min = (prices[i] < min) ? prices[i] : min;
	max = (prices[i] - min > max) ? prices[i] - min : max;
	}
	return max;
}
int main() {
	int stock_prices[] = {7, 1, 5, 3, 6, 4,10,3};
	int size = sizeof(stock_prices) / sizeof(stock_prices[0]);
	printf("Maximum profit: %d\n", maxProfit(stock_prices, size));
	return 0;
}