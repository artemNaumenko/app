import {Contact} from "expo-contacts";

export function filterContactsCondition(c: Contact, debouncedFilterTerms: string): boolean{
    const filterTerms = debouncedFilterTerms.toLowerCase();

    return (
        (c.firstName?.toLowerCase().includes(filterTerms) ||
            c.lastName?.toLowerCase().includes(filterTerms) ||
            c.phoneNumbers?.some(phoneNumber =>
                phoneNumber.number?.toString().includes(filterTerms)
            )) ?? false
    );
}