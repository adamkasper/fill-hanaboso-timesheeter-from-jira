# Fill HB Timesheeter from Jira CSV
 
- Stáhnout z Jiry CSV výkazů a uložit zde pod libovolným názvem jako `.json`.
- Obsahem souboru musý být Array objektů, viz: 
```
[
    {
        "issueKey": "ID_TASKU_V_JIRE",
        "issueSummary": "POPIS_PRACE",
        "startedAt": "CAS_VE_FORMATU 2021-08-31T09:26:00+02:00",
        "timeSpentSeconds": ODPRACOVANY_CAS_JAKO_INT_V_SEKUNDACH
    },
    ...
]
```
- vytvořit `.env`, kam vyplnit údaje viz. `.env.sample`
- v souboru `add.js` 
- spustit `yarn` a potom `yarn start` 
- tadá