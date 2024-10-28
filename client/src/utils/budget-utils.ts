import { API_BASE_URL } from "../constants/constants";
import { Budget } from "../types/types";

export const getBudget = async (): Promise<Budget> => {
    const response = await fetch(`${API_BASE_URL}/budget`, {
    	method: "GET",
	});
    if (!response.ok) {
    	throw new Error("Failed to create expense");
	}
    return response.json();
};

export const updateBudget = async (amount: number) => {
    const response = await fetch(`${API_BASE_URL}/budget`, {
    	method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount
        })
	});
    if (!response.ok) {
    	throw new Error("Failed to create expense");
	}
    return true;
};