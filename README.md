# Fill HB Timesheeter from Jira CSV
 
- Stáhnout z Jiry Excel výkazů (Aplikace v Menu -> Clockwork Free -> První ikona v řádku s "Days, HH:MM, Add Worklog" pro stažení -> Worklogs)
- V Excelu soubor "Uložit jako" CSV v UTF-8 a trochu pozměnit názvy fieldů (obsah JSONU musí být Array objektů), viz.
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