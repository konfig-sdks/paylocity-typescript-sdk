<div align="center">

[![Visit Paylocity](./header.png)](https://developer.paylocity.com)

# [Paylocity](https://developer.paylocity.com)<a id="paylocity"></a>

For documentation about this API, please visit https://developer.paylocity.com/integrations/reference/weblink-overview

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`paylocity.additionalRates.updateEmployeeAdditionalRates`](#paylocityadditionalratesupdateemployeeadditionalrates)
  * [`paylocity.clientCredentials.obtainNewClientSecret`](#paylocityclientcredentialsobtainnewclientsecret)
  * [`paylocity.companyCodes.getAllByResource`](#paylocitycompanycodesgetallbyresource)
  * [`paylocity.companySpecificSchema.getOpenApiDoc`](#paylocitycompanyspecificschemagetopenapidoc)
  * [`paylocity.customFields.getAllByCategory`](#paylocitycustomfieldsgetallbycategory)
  * [`paylocity.deduction.addOrUpdateDeduction`](#paylocitydeductionaddorupdatededuction)
  * [`paylocity.deduction.getAllDeductions`](#paylocitydeductiongetalldeductions)
  * [`paylocity.deduction.getByCode`](#paylocitydeductiongetbycode)
  * [`paylocity.deduction.removeDeductionByCodeAndStartDate`](#paylocitydeductionremovedeductionbycodeandstartdate)
  * [`paylocity.directDeposit.getAllDirectDeposits`](#paylocitydirectdepositgetalldirectdeposits)
  * [`paylocity.earnings.addOrUpdateEarning`](#paylocityearningsaddorupdateearning)
  * [`paylocity.earnings.deleteByCodeAndStart`](#paylocityearningsdeletebycodeandstart)
  * [`paylocity.earnings.getAll`](#paylocityearningsgetall)
  * [`paylocity.earnings.getByCodeAndStart`](#paylocityearningsgetbycodeandstart)
  * [`paylocity.earnings.getByEarningCode`](#paylocityearningsgetbyearningcode)
  * [`paylocity.emergencyContacts.addOrUpdate`](#paylocityemergencycontactsaddorupdate)
  * [`paylocity.employee.addToPaylocity`](#paylocityemployeeaddtopaylocity)
  * [`paylocity.employee.getAllEmployees`](#paylocityemployeegetallemployees)
  * [`paylocity.employee.getEmployeeData`](#paylocityemployeegetemployeedata)
  * [`paylocity.employee.updateEmployeeData`](#paylocityemployeeupdateemployeedata)
  * [`paylocity.employeeV1.createNewEmployeeRecord`](#paylocityemployeev1createnewemployeerecord)
  * [`paylocity.employeeV1.getEmployeeData`](#paylocityemployeev1getemployeedata)
  * [`paylocity.employeeV1.updateEmployeeDataToPaylocity`](#paylocityemployeev1updateemployeedatatopaylocity)
  * [`paylocity.employeeBenefitSetup.addOrUpdateBenefitSetup`](#paylocityemployeebenefitsetupaddorupdatebenefitsetup)
  * [`paylocity.employeeStaging.addNewEmployeeToWebLink`](#paylocityemployeestagingaddnewemployeetoweblink)
  * [`paylocity.localTax.createOrUpdateLocalTaxes`](#paylocitylocaltaxcreateorupdatelocaltaxes)
  * [`paylocity.localTax.getAllTaxesForEmployee`](#paylocitylocaltaxgetalltaxesforemployee)
  * [`paylocity.localTax.getForTaxCode`](#paylocitylocaltaxgetfortaxcode)
  * [`paylocity.localTax.removeForTaxCode`](#paylocitylocaltaxremovefortaxcode)
  * [`paylocity.localTax.updateForTaxCode`](#paylocitylocaltaxupdatefortaxcode)
  * [`paylocity.localTaxes.addNewTax`](#paylocitylocaltaxesaddnewtax)
  * [`paylocity.localTaxes.deleteByTaxCode`](#paylocitylocaltaxesdeletebytaxcode)
  * [`paylocity.localTaxes.getAllForEmployee`](#paylocitylocaltaxesgetallforemployee)
  * [`paylocity.localTaxes.getByTaxCode`](#paylocitylocaltaxesgetbytaxcode)
  * [`paylocity.nonPrimaryStateTax.addOrUpdateStateTax`](#paylocitynonprimarystatetaxaddorupdatestatetax)
  * [`paylocity.onboarding.addEmployeeToOnboarding`](#paylocityonboardingaddemployeetoonboarding)
  * [`paylocity.payStatements.getDetailsByYear`](#paylocitypaystatementsgetdetailsbyyear)
  * [`paylocity.payStatements.getDetailsByYearAndCheckDate`](#paylocitypaystatementsgetdetailsbyyearandcheckdate)
  * [`paylocity.payStatements.getSummaryByYear`](#paylocitypaystatementsgetsummarybyyear)
  * [`paylocity.payStatements.getSummaryData`](#paylocitypaystatementsgetsummarydata)
  * [`paylocity.primaryStateTax.addOrUpdateTax`](#paylocityprimarystatetaxaddorupdatetax)
  * [`paylocity.sensitiveData.addOrUpdateEmployeeSensitiveData`](#paylocitysensitivedataaddorupdateemployeesensitivedata)
  * [`paylocity.sensitiveData.getEmployeeSensitiveData`](#paylocitysensitivedatagetemployeesensitivedata)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Paylocity&serviceName=Weblink&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Paylocity } from "paylocity-typescript-sdk";

const paylocity = new Paylocity({
  // Defining the base path is optional and defaults to https://apisandbox.paylocity.com/api
  // basePath: "https://apisandbox.paylocity.com/api",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const updateEmployeeAdditionalRatesResponse =
  await paylocity.additionalRates.updateEmployeeAdditionalRates({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });

console.log(updateEmployeeAdditionalRatesResponse);
```

## Reference<a id="reference"></a>


### `paylocity.additionalRates.updateEmployeeAdditionalRates`<a id="paylocityadditionalratesupdateemployeeadditionalrates"></a>

Sends new or updated employee additional rates information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeAdditionalRatesResponse =
  await paylocity.additionalRates.updateEmployeeAdditionalRates({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### changeReason: `object`<a id="changereason-object"></a>

Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />

##### costCenter1: `object`<a id="costcenter1-object"></a>

Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />

##### costCenter2: `object`<a id="costcenter2-object"></a>

Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />

##### costCenter3: `object`<a id="costcenter3-object"></a>

Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />

##### effectiveDate: `object`<a id="effectivedate-object"></a>

Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />

##### endCheckDate: `object`<a id="endcheckdate-object"></a>

Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />

##### job: `object`<a id="job-object"></a>

Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />

##### rate: `object`<a id="rate-object"></a>

Required. Enter dollar amount that corresponds to the Per selection.<br />

##### rateCode: `object`<a id="ratecode-object"></a>

Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />

##### rateNotes: `object`<a id="ratenotes-object"></a>

Not required.<br  />Max length: 4000<br />

##### ratePer: `object`<a id="rateper-object"></a>

Required. Valid values are HOUR or WEEK.<br />

##### shift: `object`<a id="shift-object"></a>

Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/additionalRates` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.clientCredentials.obtainNewClientSecret`<a id="paylocityclientcredentialsobtainnewclientsecret"></a>

Obtain new client secret for Paylocity-issued client id. See Weblink Authentication section for details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const obtainNewClientSecretResponse =
  await paylocity.clientCredentials.obtainNewClientSecret({
    code: "code_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

A value sent with the \\\'ACTION NEEDED: Web Link API Credentials Expiring Soon.\\\' email notification.

#### 🔄 Return<a id="🔄-return"></a>

[ClientCredentialsResponse](./models/client-credentials-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/credentials/secrets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.companyCodes.getAllByResource`<a id="paylocitycompanycodesgetallbyresource"></a>

Get All Company Codes for the selected company and resource.
\
> 🚧 Maintenance Mode
> 
> _This API is in a limited support mode and certain resources will be moved to a sunset status in the next 18-24 months._
> 
> The [Company Level Information API](ref:get_apihub-payroll-v1-companies-companyid-jobs) should be used when possible in place of Company Codes resource of this API

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllByResourceResponse = await paylocity.companyCodes.getAllByResource({
  companyId: "companyId_example",
  codeResource: "codeResource_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### codeResource: `string`<a id="coderesource-string"></a>

Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyCodes](./models/company-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/codes/{codeResource}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.companySpecificSchema.getOpenApiDoc`<a id="paylocitycompanyspecificschemagetopenapidoc"></a>

The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Paylocity Payroll/HR solution. The customized schemas also indicate which properties are required by the company within Paylocity Payroll/HR solution.<br  />To learn more about Open API, click [here](https://www.openapis.org/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpenApiDocResponse =
  await paylocity.companySpecificSchema.getOpenApiDoc({
    companyId: "companyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/openapi` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.customFields.getAllByCategory`<a id="paylocitycustomfieldsgetallbycategory"></a>

Get All Custom Fields for the selected company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllByCategoryResponse = await paylocity.customFields.getAllByCategory({
  companyId: "companyId_example",
  category: "category_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### category: `string`<a id="category-string"></a>

Custom Fields Category

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldDefinition](./models/custom-field-definition.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/customfields/{category}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.deduction.addOrUpdateDeduction`<a id="paylocitydeductionaddorupdatededuction"></a>

Add/Update Deduction API sends new or updated employee deduction information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateDeductionResponse =
  await paylocity.deduction.addOrUpdateDeduction({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deduction: [`AddUpdateDeduction`](./models/add-update-deduction.ts)<a id="deduction-addupdatedeductionmodelsadd-update-deductionts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/deduction` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.deduction.getAllDeductions`<a id="paylocitydeductiongetalldeductions"></a>

Get All Deductions returns all deductions for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllDeductionsResponse = await paylocity.deduction.getAllDeductions({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[Deduction](./models/deduction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/deductions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.deduction.getByCode`<a id="paylocitydeductiongetbycode"></a>

Get Deduction for Deduction Code returns records for a specific deduction for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByCodeResponse = await paylocity.deduction.getByCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  deductionCode: "deductionCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### deductionCode: `string`<a id="deductioncode-string"></a>

Deduction Code

#### 🔄 Return<a id="🔄-return"></a>

[Deduction](./models/deduction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/deductions/{deductionCode}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.deduction.removeDeductionByCodeAndStartDate`<a id="paylocitydeductionremovedeductionbycodeandstartdate"></a>

Delete Deduction API deletes an incorrect deduction from Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDeductionByCodeAndStartDateResponse =
  await paylocity.deduction.removeDeductionByCodeAndStartDate({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
    deductionCode: "deductionCode_example",
    startDate: "startDate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### deductionCode: `string`<a id="deductioncode-string"></a>

Deduction Code

##### startDate: `string`<a id="startdate-string"></a>

Start Date

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/deductions/{deductionCode}/{startDate}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.directDeposit.getAllDirectDeposits`<a id="paylocitydirectdepositgetalldirectdeposits"></a>

Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllDirectDepositsResponse =
  await paylocity.directDeposit.getAllDirectDeposits({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[DirectDeposit](./models/direct-deposit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/directDeposit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.earnings.addOrUpdateEarning`<a id="paylocityearningsaddorupdateearning"></a>

Add/Update Earning API sends new or updated employee earnings information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateEarningResponse = await paylocity.earnings.addOrUpdateEarning({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  earningCode: {},
  startDate: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### earningCode: `object`<a id="earningcode-object"></a>

Earning code. Must match Company setup. <br  />Max length: 10

##### startDate: `object`<a id="startdate-object"></a>

Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### agency: `object`<a id="agency-object"></a>

Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10

##### amount: `object`<a id="amount-object"></a>

Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)

##### annualMaximum: `object`<a id="annualmaximum-object"></a>

Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)

##### calculationCode: `object`<a id="calculationcode-object"></a>

Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20

##### costCenter1: `object`<a id="costcenter1-object"></a>

Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10

##### costCenter2: `object`<a id="costcenter2-object"></a>

Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10

##### costCenter3: `object`<a id="costcenter3-object"></a>

Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10

##### effectiveDate: `object`<a id="effectivedate-object"></a>

Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.

##### endDate: `object`<a id="enddate-object"></a>

Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.

##### frequency: `object`<a id="frequency-object"></a>

Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5

##### goal: `object`<a id="goal-object"></a>

Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)

##### hoursOrUnits: `object`<a id="hoursorunits-object"></a>

The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)

##### isSelfInsured: `object`<a id="isselfinsured-object"></a>

Used for ACA. If not entered, defaulted to Company earning setup.

##### jobCode: `object`<a id="jobcode-object"></a>

Job code associated with earnings. Must match Company setup.<br  /> Max length: 20

##### miscellaneousInfo: `object`<a id="miscellaneousinfo-object"></a>

Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50

##### paidTowardsGoal: `object`<a id="paidtowardsgoal-object"></a>

Amount already paid to employee toward goal. <br  /> Decimal(12,2)

##### payPeriodMaximum: `object`<a id="payperiodmaximum-object"></a>

Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)

##### payPeriodMinimum: `object`<a id="payperiodminimum-object"></a>

Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)

##### rate: `object`<a id="rate-object"></a>

Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)

##### rateCode: `object`<a id="ratecode-object"></a>

Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/earnings` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.earnings.deleteByCodeAndStart`<a id="paylocityearningsdeletebycodeandstart"></a>

Delete Earning by Earning Code and Start Date

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByCodeAndStartResponse =
  await paylocity.earnings.deleteByCodeAndStart({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
    earningCode: "earningCode_example",
    startDate: "startDate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### earningCode: `string`<a id="earningcode-string"></a>

Earning Code

##### startDate: `string`<a id="startdate-string"></a>

Start Date

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.earnings.getAll`<a id="paylocityearningsgetall"></a>

Get All Earnings returns all earnings for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await paylocity.earnings.getAll({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[Earning](./models/earning.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/earnings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.earnings.getByCodeAndStart`<a id="paylocityearningsgetbycodeandstart"></a>

Get Earnings returns the single earning with the provided earning code and start date for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByCodeAndStartResponse = await paylocity.earnings.getByCodeAndStart({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  earningCode: "earningCode_example",
  startDate: "startDate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### earningCode: `string`<a id="earningcode-string"></a>

Earning Code

##### startDate: `string`<a id="startdate-string"></a>

Start Date

#### 🔄 Return<a id="🔄-return"></a>

[Earning](./models/earning.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.earnings.getByEarningCode`<a id="paylocityearningsgetbyearningcode"></a>

Get Earnings returns all earnings with the provided earning code for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByEarningCodeResponse = await paylocity.earnings.getByEarningCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  earningCode: "earningCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### earningCode: `string`<a id="earningcode-string"></a>

Earning Code

#### 🔄 Return<a id="🔄-return"></a>

[Earning](./models/earning.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.emergencyContacts.addOrUpdate`<a id="paylocityemergencycontactsaddorupdate"></a>

Sends new or updated employee emergency contacts directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateResponse = await paylocity.emergencyContacts.addOrUpdate({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  firstName: {},
  lastName: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `object`<a id="firstname-object"></a>

Required. Contact first name. <br  />Max length: 40

##### lastName: `object`<a id="lastname-object"></a>

Required. Contact last name. <br  />Max length: 40

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### address1: `object`<a id="address1-object"></a>

1st address line.

##### address2: `object`<a id="address2-object"></a>

2nd address line.

##### city: `object`<a id="city-object"></a>

City.

##### country: `object`<a id="country-object"></a>

County.

##### county: `object`<a id="county-object"></a>

Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).

##### email: `object`<a id="email-object"></a>

Contact email.  Must be valid email address format.

##### homePhone: `object`<a id="homephone-object"></a>

Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.

##### mobilePhone: `object`<a id="mobilephone-object"></a>

Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.

##### notes: `object`<a id="notes-object"></a>

Notes. <br  />Max length: 1000

##### pager: `object`<a id="pager-object"></a>

Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.

##### primaryPhone: `object`<a id="primaryphone-object"></a>

Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)

##### priority: `object`<a id="priority-object"></a>

Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).

##### relationship: `object`<a id="relationship-object"></a>

Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.

##### state: `object`<a id="state-object"></a>

State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).

##### syncEmployeeInfo: `boolean`<a id="syncemployeeinfo-boolean"></a>

Valid values are *true* or *false*.

##### workExtension: `object`<a id="workextension-object"></a>

Work Extension.

##### workPhone: `object`<a id="workphone-object"></a>

Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.

##### zip: `object`<a id="zip-object"></a>

Postal code.  If U.S. address, must be a valid zip code.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employee.addToPaylocity`<a id="paylocityemployeeaddtopaylocity"></a>

New Employee API sends new employee data directly to Paylocity Payroll/HR solution. Companies who use the New Hire Template in Paylocity Payroll/HR solution may require additional fields when hiring employees. New Employee API Requests will honor these required fields.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToPaylocityResponse = await paylocity.employee.addToPaylocity({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### additionalDirectDeposit: `object`<a id="additionaldirectdeposit-object"></a>
                               `object`[]

Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.

##### additionalRate: `object`<a id="additionalrate-object"></a>
                      `object`[]

Add Additional Rates.

##### benefitSetup: `object`<a id="benefitsetup-object"></a>

 Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.

##### birthDate: `object`<a id="birthdate-object"></a>

Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

##### companyFEIN: `object`<a id="companyfein-object"></a>

Company FEIN as defined in Paylocity Payroll/HR solution, applicable with GET requests only.<br  /> Max length: 20

##### companyName: `object`<a id="companyname-object"></a>

Company name as defined in Paylocity Payroll/HR solution, applicable with GET requests only.<br  /> Max length: 50

##### currency: `object`<a id="currency-object"></a>

Employee is paid in this currency. <br  />Max length: 30

##### customBooleanFields: `object`<a id="custombooleanfields-object"></a>
                           `object`[]

Up to 8 custom fields of boolean (checkbox) type value.

##### customDateFields: `object`<a id="customdatefields-object"></a>
                        `object`[]

Up to 8 custom fields of the date type value.

##### customDropDownFields: `object`<a id="customdropdownfields-object"></a>
                            `object`[]

Up to 8 custom fields of the dropdown type value.

##### customNumberFields: `object`<a id="customnumberfields-object"></a>
                          `object`[]

Up to 8 custom fields of numeric type value.

##### customTextFields: `object`<a id="customtextfields-object"></a>
                        `object`[]

Up to 8 custom fields of text type value.

##### departmentPosition: `object`<a id="departmentposition-object"></a>

Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.

##### disabilityDescription: `object`<a id="disabilitydescription-object"></a>

Indicates if employee has disability status.

##### emergencyContacts: `object`<a id="emergencycontacts-object"></a>
                         `object`[]

Add or update Emergency Contacts.

##### employeeId: `object`<a id="employeeid-object"></a>

Leave blank to have Paylocity Payroll/HR solution automatically assign the next available employee ID.<br  />Max length: 10

##### ethnicity: `object`<a id="ethnicity-object"></a>

Employee ethnicity.<br  /> Max length: 10

##### federalTax: `object`<a id="federaltax-object"></a>

Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.

##### firstName: `object`<a id="firstname-object"></a>

Employee first name. <br  />Max length: 40

##### gender: `object`<a id="gender-object"></a>

Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1

##### homeAddress: `object`<a id="homeaddress-object"></a>

Add or update employee\\\'s home address, personal phone numbers, and personal email.

##### isHighlyCompensated: `boolean`<a id="ishighlycompensated-boolean"></a>

Indicates if employee meets the highly compensated employee criteria.

##### isSmoker: `boolean`<a id="issmoker-boolean"></a>

Indicates if employee is a smoker.

##### lastName: `object`<a id="lastname-object"></a>

Employee last name. <br  />Max length: 40

##### localTax: `object`<a id="localtax-object"></a>
                `object`[]

Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.

##### mainDirectDeposit: `object`<a id="maindirectdeposit-object"></a>

Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.

##### maritalStatus: `object`<a id="maritalstatus-object"></a>

Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10

##### middleName: `object`<a id="middlename-object"></a>

Employee middle name.<br  /> Max length: 20

##### nonPrimaryStateTax: `object`<a id="nonprimarystatetax-object"></a>

Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.

##### ownerPercent: `object`<a id="ownerpercent-object"></a>

Percentage of employee\\\'s ownership in the company, entered as a whole number. <br  /> Decimal (12,2)

##### preferredName: `object`<a id="preferredname-object"></a>

Employee preferred display name.<br  /> Max length: 20

##### primaryPayRate: `object`<a id="primarypayrate-object"></a>

Add or update hourly or salary pay rate, effective date, and pay frequency.

##### primaryStateTax: `object`<a id="primarystatetax-object"></a>

Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.

##### priorLastName: `object`<a id="priorlastname-object"></a>

Prior last name if applicable.<br  />Max length: 40

##### salutation: `object`<a id="salutation-object"></a>

Employee preferred salutation. <br  />Max length: 10

##### ssn: `object`<a id="ssn-object"></a>

Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11

##### status: `object`<a id="status-object"></a>

Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.

##### suffix: `object`<a id="suffix-object"></a>

Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30

##### taxSetup: `object`<a id="taxsetup-object"></a>

Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.

##### veteranDescription: `object`<a id="veterandescription-object"></a>

Indicates if employee is a veteran.

##### webTime: `object`<a id="webtime-object"></a>

Add or update Web Time badge number and charge rate and synchronize Paylocity Payroll/HR solution and Web Time employee data.

##### workAddress: `object`<a id="workaddress-object"></a>

Add or update employee\\\'s work address, phone numbers, and email. Work Location drop down field is not included.

##### workEligibility: `object`<a id="workeligibility-object"></a>

Add or update I-9 work authorization information.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeIdResponse](./models/employee-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employee.getAllEmployees`<a id="paylocityemployeegetallemployees"></a>

Get All Employees API will return employee data currently available in Paylocity Payroll/HR solution.
\
> 🚧 Maintenance Mode
> 
> _This API is in a limited support mode and certain resources will be moved to a sunset status in the next 18-24 months._
> 
> The [Employee Demographic API](ref:get_corehr-v1-companies-companyid-employees) should be used when possible in place of the Employee resources of this API

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllEmployeesResponse = await paylocity.employee.getAllEmployees({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### pagesize: `number`<a id="pagesize-number"></a>

Number of records per page. Default value is 25.

##### pagenumber: `number`<a id="pagenumber-number"></a>

Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.

##### includetotalcount: `boolean`<a id="includetotalcount-boolean"></a>

Whether to include the total record count in the header\'s X-Pcty-Total-Count property. Default value is true.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeInfo](./models/employee-info.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employee.getEmployeeData`<a id="paylocityemployeegetemployeedata"></a>

Get Employee API will return employee data currently available in Paylocity Payroll/HR solution.
\
> 🚧 Maintenance Mode
> 
> _This API is in a limited support mode and certain resources will be moved to a sunset status in the next 18-24 months._
> 
> The [Employee Demographic API](ref:get_corehr-v1-companies-companyid-employees-employeeid) should be used when possible in place of the Employee resources of this API

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeDataResponse = await paylocity.employee.getEmployeeData({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[Employee](./models/employee.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employee.updateEmployeeData`<a id="paylocityemployeeupdateemployeedata"></a>

Update Employee API will update existing employee data in WebPay.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeDataResponse = await paylocity.employee.updateEmployeeData({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  requestBody: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### requestBody: [`Employee`](./models/employee.ts)<a id="requestbody-employeemodelsemployeets"></a>

Employee Model

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employeeV1.createNewEmployeeRecord`<a id="paylocityemployeev1createnewemployeerecord"></a>

This resource allows for the creation of a new employee record for a specified companyID.  Additional field objects may need to be added for companies that use the New Hire Template in the Paylocity HCM solution when hiring employees and have additional required fields.
 
> 🚧 Maintenance Mode
> 
> _This resource version is in a limited support mode and should not be used for new integrations.  Please use the latest version._


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEmployeeRecordResponse =
  await paylocity.employeeV1.createNewEmployeeRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### newEmployee: [`NewEmployee`](./models/new-employee.ts)<a id="newemployee-newemployeemodelsnew-employeets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employee` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employeeV1.getEmployeeData`<a id="paylocityemployeev1getemployeedata"></a>

Get Employee API will return employee data currently available in Paylocity Payroll/HR solution.
 
> 🚧 Maintenance Mode
> 
> _This resource version is in a limited support mode and should not be used for new integrations.  Please use the latest version._


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeDataResponse = await paylocity.employeeV1.getEmployeeData({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeV1](./models/employee-v1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company/{companyId}/employee/{employeeId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employeeV1.updateEmployeeDataToPaylocity`<a id="paylocityemployeev1updateemployeedatatopaylocity"></a>

Update Employee API sends updates to employee data to Paylocity Payroll/HR solution.
 
> 🚧 Maintenance Mode
> 
> _This resource version is in a limited support mode and should not be used for new integrations.  Please use the latest version._


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmployeeDataToPaylocityResponse =
  await paylocity.employeeV1.updateEmployeeDataToPaylocity({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### updateEmployee: [`UpdateEmployee`](./models/update-employee.ts)<a id="updateemployee-updateemployeemodelsupdate-employeets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/update-employee` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employeeBenefitSetup.addOrUpdateBenefitSetup`<a id="paylocityemployeebenefitsetupaddorupdatebenefitsetup"></a>

Sends new or updated employee benefit setup information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateBenefitSetupResponse =
  await paylocity.employeeBenefitSetup.addOrUpdateBenefitSetup({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### benefitClass: `object`<a id="benefitclass-object"></a>

Benefit Class code. Values are configured in Paylocity Payroll/HR solution Company > Setup > Benefits > Classes.<br  />Max length: 30

##### benefitClassEffectiveDate: `object`<a id="benefitclasseffectivedate-object"></a>

Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

##### benefitSalary: `object`<a id="benefitsalary-object"></a>

Salary used to configure benefits.<br  />Decimal(12,2)

##### benefitSalaryEffectiveDate: `object`<a id="benefitsalaryeffectivedate-object"></a>

Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

##### doNotApplyAdministrativePeriod: `object`<a id="donotapplyadministrativeperiod-object"></a>

Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.

##### isMeasureAcaEligibility: `object`<a id="ismeasureacaeligibility-object"></a>

Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/benefitSetup` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.employeeStaging.addNewEmployeeToWebLink`<a id="paylocityemployeestagingaddnewemployeetoweblink"></a>

Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewEmployeeToWebLinkResponse =
  await paylocity.employeeStaging.addNewEmployeeToWebLink({
    companyId: "companyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### additionalDirectDeposit: `object`<a id="additionaldirectdeposit-object"></a>
                               `object`[]

Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.

##### benefitSetup: `object`<a id="benefitsetup-object"></a>
                    `object`[]

Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.

##### birthDate: `object`<a id="birthdate-object"></a>

Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.

##### customBooleanFields: `object`<a id="custombooleanfields-object"></a>
                           `object`[]

Up to 8 custom fields of boolean (checkbox) type value.

##### customDateFields: `object`<a id="customdatefields-object"></a>
                        `object`[]

Up to 8 custom fields of the date type value.

##### customDropDownFields: `object`<a id="customdropdownfields-object"></a>
                            `object`[]

Up to 8 custom fields of the dropdown type value.

##### customNumberFields: `object`<a id="customnumberfields-object"></a>
                          `object`[]

Up to 8 custom fields of numeric type value.

##### customTextFields: `object`<a id="customtextfields-object"></a>
                        `object`[]

Up to 8 custom fields of text type value.

##### departmentPosition: `object`<a id="departmentposition-object"></a>
                          `object`[]

Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.

##### disabilityDescription: `object`<a id="disabilitydescription-object"></a>

Indicates if employee has disability status.

##### employeeId: `object`<a id="employeeid-object"></a>

Leave blank to have Paylocity Payroll/HR solution automatically assign the next available employee ID.<br  /> Max length: 10

##### ethnicity: `object`<a id="ethnicity-object"></a>

Employee ethnicity.<br  /> Max length: 10

##### federalTax: `object`<a id="federaltax-object"></a>
                  `object`[]

Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.

##### firstName: `object`<a id="firstname-object"></a>

Employee first name. <br  />Max length: 40

##### fitwExemptReason: `object`<a id="fitwexemptreason-object"></a>

Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30

##### futaExemptReason: `object`<a id="futaexemptreason-object"></a>

Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30

##### gender: `object`<a id="gender-object"></a>

Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1

##### homeAddress: `object`<a id="homeaddress-object"></a>
                   `object`[]

Add employee\\\'s home address, personal phone numbers, and personal email.

##### isEmployee943: `object`<a id="isemployee943-object"></a>

Indicates if employee in agriculture or farming.

##### isSmoker: `object`<a id="issmoker-object"></a>

Indicates if employee is a smoker.

##### lastName: `object`<a id="lastname-object"></a>

Employee last name. <br  />Max length: 40

##### localTax: `object`<a id="localtax-object"></a>
                `object`[]

Add local tax code, filing status, and exemptions including PA-PSD taxes.

##### mainDirectDeposit: `object`<a id="maindirectdeposit-object"></a>
                         `object`[]

Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.

##### maritalStatus: `object`<a id="maritalstatus-object"></a>

Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10

##### medExemptReason: `object`<a id="medexemptreason-object"></a>

Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30

##### middleName: `object`<a id="middlename-object"></a>

Employee middle name.<br  /> Max length: 20

##### nonPrimaryStateTax: `object`<a id="nonprimarystatetax-object"></a>
                          `object`[]

Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.

##### preferredName: `object`<a id="preferredname-object"></a>

Employee preferred display name.<br  /> Max length: 20

##### primaryPayRate: `object`<a id="primarypayrate-object"></a>
                      `object`[]

Add hourly or salary pay rate, effective date, and pay frequency.

##### primaryStateTax: `object`<a id="primarystatetax-object"></a>
                       `object`[]

Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.

##### priorLastName: `object`<a id="priorlastname-object"></a>

Prior last name if applicable.<br  />Max length: 40

##### salutation: `object`<a id="salutation-object"></a>

Employee preferred salutation. <br  />Max length: 10

##### sitwExemptReason: `object`<a id="sitwexemptreason-object"></a>

Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30

##### ssExemptReason: `object`<a id="ssexemptreason-object"></a>

Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30

##### ssn: `object`<a id="ssn-object"></a>

Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11

##### status: `object`<a id="status-object"></a>
              `object`[]

Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.

##### suffix: `object`<a id="suffix-object"></a>

Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30

##### suiExemptReason: `object`<a id="suiexemptreason-object"></a>

Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30

##### suiState: `object`<a id="suistate-object"></a>

Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2

##### taxDistributionCode1099R: `object`<a id="taxdistributioncode1099r-object"></a>

Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1

##### taxForm: `object`<a id="taxform-object"></a>

Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15

##### veteranDescription: `object`<a id="veterandescription-object"></a>

Indicates if employee is a veteran.

##### webTime: `object`<a id="webtime-object"></a>

Add Web Time badge number and charge rate and synchronize Paylocity Payroll/HR solution and Web Time employee data.

##### workAddress: `object`<a id="workaddress-object"></a>
                   `object`[]

Add employee\\\'s work address, phone numbers, and email. Work Location drop down field is not included.

##### workEligibility: `object`<a id="workeligibility-object"></a>
                       `object`[]

Add I-9 work authorization information.

#### 🔄 Return<a id="🔄-return"></a>

[TrackingNumberResponse](./models/tracking-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/weblinkstaging/companies/{companyId}/employees/newemployees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTax.createOrUpdateLocalTaxes`<a id="paylocitylocaltaxcreateorupdatelocaltaxes"></a>

Add Local Tax sends new local tax information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateLocalTaxesResponse =
  await paylocity.localTax.createOrUpdateLocalTaxes({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### exemptions: `object`<a id="exemptions-object"></a>

Local tax exemptions value.<br  />Decimal (12,2)

##### exemptions2: `object`<a id="exemptions2-object"></a>

Local tax exemptions 2 value.<br  />Decimal (12,2)

##### filingStatus: `object`<a id="filingstatus-object"></a>

Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50

##### residentPSD: `object`<a id="residentpsd-object"></a>

Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9

##### taxCode: `object`<a id="taxcode-object"></a>

Local tax code.<br  />Max length: 50

##### workPSD: `object`<a id="workpsd-object"></a>

Work location PSD. Must match Company setup. <br  /> Max length: 9

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/localTaxes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTax.getAllTaxesForEmployee`<a id="paylocitylocaltaxgetalltaxesforemployee"></a>

Get All Local Taxes returns all local tax information for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTaxesForEmployeeResponse =
  await paylocity.localTax.getAllTaxesForEmployee({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[LocalTax](./models/local-tax.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/localTaxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTax.getForTaxCode`<a id="paylocitylocaltaxgetfortaxcode"></a>

Get Local Tax for Tax Code returns local tax information for the specific tax code for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForTaxCodeResponse = await paylocity.localTax.getForTaxCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  taxCode: "taxCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### taxCode: `string`<a id="taxcode-string"></a>

Tax Code

#### 🔄 Return<a id="🔄-return"></a>

[LocalTax](./models/local-tax.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTax.removeForTaxCode`<a id="paylocitylocaltaxremovefortaxcode"></a>

Delete Local Tax for Tax Code deletes the local tax code from Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeForTaxCodeResponse = await paylocity.localTax.removeForTaxCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  taxCode: "taxCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### taxCode: `string`<a id="taxcode-string"></a>

Tax Code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTax.updateForTaxCode`<a id="paylocitylocaltaxupdatefortaxcode"></a>

Update Local Tax sends updated local tax code information for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateForTaxCodeResponse = await paylocity.localTax.updateForTaxCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  taxCode: "taxCode_example",
  requestBody: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### taxCode: `string`<a id="taxcode-string"></a>

Tax Code

##### requestBody: [`LocalTax`](./models/local-tax.ts)<a id="requestbody-localtaxmodelslocal-taxts"></a>

localTax Model (Note: taxCode can be included in the localTax model but will be ignored)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTaxes.addNewTax`<a id="paylocitylocaltaxesaddnewtax"></a>

Sends new employee local tax information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewTaxResponse = await paylocity.localTaxes.addNewTax({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### exemptions: `object`<a id="exemptions-object"></a>

Local tax exemptions value.<br  />Decimal (12,2)

##### exemptions2: `object`<a id="exemptions2-object"></a>

Local tax exemptions 2 value.<br  />Decimal (12,2)

##### filingStatus: `object`<a id="filingstatus-object"></a>

Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50

##### residentPSD: `object`<a id="residentpsd-object"></a>

Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9

##### taxCode: `object`<a id="taxcode-object"></a>

Local tax code.<br  />Max length: 50

##### workPSD: `object`<a id="workpsd-object"></a>

Work location PSD. Must match Company setup. <br  /> Max length: 9

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/localTaxes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTaxes.deleteByTaxCode`<a id="paylocitylocaltaxesdeletebytaxcode"></a>

Delete local tax by tax code

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByTaxCodeResponse = await paylocity.localTaxes.deleteByTaxCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  taxCode: "taxCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### taxCode: `string`<a id="taxcode-string"></a>

Tax Code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTaxes.getAllForEmployee`<a id="paylocitylocaltaxesgetallforemployee"></a>

Returns all local taxes for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllForEmployeeResponse = await paylocity.localTaxes.getAllForEmployee({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[LocalTax](./models/local-tax.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/localTaxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.localTaxes.getByTaxCode`<a id="paylocitylocaltaxesgetbytaxcode"></a>

Returns all local taxes with the provided tax code for the selected employee.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByTaxCodeResponse = await paylocity.localTaxes.getByTaxCode({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  taxCode: "taxCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### taxCode: `string`<a id="taxcode-string"></a>

Tax Code

#### 🔄 Return<a id="🔄-return"></a>

[LocalTax](./models/local-tax.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.nonPrimaryStateTax.addOrUpdateStateTax`<a id="paylocitynonprimarystatetaxaddorupdatestatetax"></a>

Sends new or updated employee non-primary state tax information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateStateTaxResponse =
  await paylocity.nonPrimaryStateTax.addOrUpdateStateTax({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### amount: `object`<a id="amount-object"></a>

State tax code.<br  /> Max length: 50

##### deductionsAmount: `number`<a id="deductionsamount-number"></a>

Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)

##### dependentsAmount: `number`<a id="dependentsamount-number"></a>

Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)

##### exemptions: `object`<a id="exemptions-object"></a>

State tax exemptions value.<br  />Decimal (12,2)

##### exemptions2: `object`<a id="exemptions2-object"></a>

State tax exemptions 2 value.<br  />Decimal (12,2)

##### filingStatus: `object`<a id="filingstatus-object"></a>

Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50

##### higherRate: `boolean`<a id="higherrate-boolean"></a>

Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean

##### otherIncomeAmount: `number`<a id="otherincomeamount-number"></a>

Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)

##### percentage: `object`<a id="percentage-object"></a>

State Tax percentage. <br  />Decimal (12,2)

##### reciprocityCode: `object`<a id="reciprocitycode-object"></a>

Non-primary state tax reciprocity code.<br  /> Max length: 50

##### specialCheckCalc: `object`<a id="specialcheckcalc-object"></a>

Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10

##### taxCalculationCode: `object`<a id="taxcalculationcode-object"></a>

Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10

##### taxCode: `object`<a id="taxcode-object"></a>

State tax code.<br  /> Max length: 50

##### w4FormYear: `number`<a id="w4formyear-number"></a>

The state W4 form year <br  />Integer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.onboarding.addEmployeeToOnboarding`<a id="paylocityonboardingaddemployeetoonboarding"></a>

Onboarding API sends employee data into Paylocity Onboarding to help ensure an easy and accurate hiring process for subsequent completion into Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addEmployeeToOnboardingResponse =
  await paylocity.onboarding.addEmployeeToOnboarding({
    companyId: "companyId_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `string`<a id="firstname-string"></a>

Employee first name. <br  />Max length: 40

##### lastName: `string`<a id="lastname-string"></a>

Employee last name. <br  />Max length: 40

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

(optional) The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### address1: `string`<a id="address1-string"></a>

Employee home 1st address line. <br  />Max length: 40

##### address2: `string`<a id="address2-string"></a>

Employee home 2nd address line. <br  />Max length: 40

##### autoPayType: `string`<a id="autopaytype-string"></a>

Valid values are *N, D, S. (N- employee won\\\'t automatically receive a salary or hours during payroll, D - employee will be automatically paid in defaultHours during payroll, S - employee will be automatically paid Salary amount during payroll)*. <br  />Max length: 3

##### baseRate: `number`<a id="baserate-number"></a>

Employee base rate, used for Hourly employees. <br  />Decimal (12,2)

##### city: `string`<a id="city-string"></a>

Employee home city. <br  />Max length: 40

##### costCenter1: `string`<a id="costcenter1-string"></a>

Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10

##### costCenter2: `string`<a id="costcenter2-string"></a>

Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10

##### costCenter3: `string`<a id="costcenter3-string"></a>

Employer defined location, like *branch, division, department, etc.* Must match Company setup. <br  />Max length: 10

##### defaultHours: `number`<a id="defaulthours-number"></a>

Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)

##### employeeStatus: `string`<a id="employeestatus-string"></a>

Employee current work status. Common values are *A (Active), L (Leave of Absence), T (Terminated)*. <br  />Max length: 20

##### employmentType: `string`<a id="employmenttype-string"></a>

Employee current employment type. Common values RFT *(Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10

##### federalFilingStatus: `string`<a id="federalfilingstatus-string"></a>

Employee federal filing status. Common values *M (Married), S (Single)*. <br  />Max length: 10

##### sex: `string`<a id="sex-string"></a>

Employee gender. Common values *M (Male), F (Female)*. <br  />Max length: 1

##### hireDate: `string`<a id="hiredate-string"></a>

Employee hired date. Common formats are MM-DD-CCYY, CCYY-MM-DD

##### homePhone: `string`<a id="homephone-string"></a>

Employee home phone number. <br  />Max length: 12

##### maritalStatus: `string`<a id="maritalstatus-string"></a>

Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10

##### personalMobilePhone: `string`<a id="personalmobilephone-string"></a>

Employee personal mobile phone number. <br  />Max length: 12

##### payFrequency: `string`<a id="payfrequency-string"></a>

Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5

##### personalEmailAddress: `string`<a id="personalemailaddress-string"></a>

Employee personal email address. <br  />Max length: 50

##### payType: `string`<a id="paytype-string"></a>

Employee pay type. Valid values are *Hourly or Salary*. <br  />Max length: 10

##### ratePer: `string`<a id="rateper-string"></a>

Employee base rate frequency used with payType Hourly. Common values are *Hour or Week*. Default is Hour <br  />Max length: 10

##### salary: `number`<a id="salary-number"></a>

Employee gross salary per pay period used with payType Salary. <br  />Decimal (12,2)

##### state: `string`<a id="state-string"></a>

Employee home state. <br  />Max length: 2

##### ssn: `string`<a id="ssn-string"></a>

Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11

##### stateFilingStatus: `string`<a id="statefilingstatus-string"></a>

Employee state filing status. Common values are *M (Married), S (Single)*. <br  />Max length: 50

##### suiState: `string`<a id="suistate-string"></a>

Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2

##### taxForm: `string`<a id="taxform-string"></a>

Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15

##### taxState: `string`<a id="taxstate-string"></a>

Employee primary tax state. <br  />Max Length: 2

##### userName: `string`<a id="username-string"></a>

Required. Employer assigned username to log into Onboarding. Duplicate usernames are not allowed. <br  />Must be between 3 and 20 characters and cannot have special characters other than . (period) and _ (underscore)

##### workEmailAddress: `string`<a id="workemailaddress-string"></a>

Employee work email. <br  />Max length: 50

##### zip: `string`<a id="zip-string"></a>

Employee home zip code. <br  />Max length: 10

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{companyId}/onboarding/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.payStatements.getDetailsByYear`<a id="paylocitypaystatementsgetdetailsbyyear"></a>

Get pay statement details API will return employee pay statement details data currently available in Paylocity Payroll/HR solution for the specified year.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByYearResponse = await paylocity.payStatements.getDetailsByYear(
  {
    companyId: "companyId_example",
    employeeId: "employeeId_example",
    year: "year_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### year: `string`<a id="year-string"></a>

The year for which to retrieve pay statement data

##### pagesize: `number`<a id="pagesize-number"></a>

Number of records per page. Default value is 25.

##### pagenumber: `number`<a id="pagenumber-number"></a>

Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.

##### includetotalcount: `boolean`<a id="includetotalcount-boolean"></a>

Whether to include the total record count in the header\'s X-Pcty-Total-Count property. Default value is true.

##### codegroup: `string`<a id="codegroup-string"></a>

Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.

#### 🔄 Return<a id="🔄-return"></a>

[PayStatementDetails](./models/pay-statement-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.payStatements.getDetailsByYearAndCheckDate`<a id="paylocitypaystatementsgetdetailsbyyearandcheckdate"></a>

Get pay statement details API will return employee pay statement detail data currently available in Paylocity Payroll/HR solution for the specified year and check date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByYearAndCheckDateResponse =
  await paylocity.payStatements.getDetailsByYearAndCheckDate({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
    year: "year_example",
    checkDate: "checkDate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### year: `string`<a id="year-string"></a>

The year for which to retrieve pay statement data

##### checkDate: `string`<a id="checkdate-string"></a>

The check date for which to retrieve pay statement data

##### pagesize: `number`<a id="pagesize-number"></a>

Number of records per page. Default value is 25.

##### pagenumber: `number`<a id="pagenumber-number"></a>

Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.

##### includetotalcount: `boolean`<a id="includetotalcount-boolean"></a>

Whether to include the total record count in the header\'s X-Pcty-Total-Count property. Default value is true.

##### codegroup: `string`<a id="codegroup-string"></a>

Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.

#### 🔄 Return<a id="🔄-return"></a>

[PayStatementDetails](./models/pay-statement-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.payStatements.getSummaryByYear`<a id="paylocitypaystatementsgetsummarybyyear"></a>

Get pay statement summary API will return employee pay statement summary data currently available in Paylocity Payroll/HR solution for the specified year.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryByYearResponse = await paylocity.payStatements.getSummaryByYear(
  {
    companyId: "companyId_example",
    employeeId: "employeeId_example",
    year: "year_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### year: `string`<a id="year-string"></a>

The year for which to retrieve pay statement data

##### pagesize: `number`<a id="pagesize-number"></a>

Number of records per page. Default value is 25.

##### pagenumber: `number`<a id="pagenumber-number"></a>

Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.

##### includetotalcount: `boolean`<a id="includetotalcount-boolean"></a>

Whether to include the total record count in the header\'s X-Pcty-Total-Count property. Default value is true.

##### codegroup: `string`<a id="codegroup-string"></a>

Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.

#### 🔄 Return<a id="🔄-return"></a>

[PayStatementSummary](./models/pay-statement-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.payStatements.getSummaryData`<a id="paylocitypaystatementsgetsummarydata"></a>

Get pay statement summary API will return employee pay statement summary data currently available in Paylocity Payroll/HR solution for the specified year and check date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryDataResponse = await paylocity.payStatements.getSummaryData({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
  year: "year_example",
  checkDate: "checkDate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### year: `string`<a id="year-string"></a>

The year for which to retrieve pay statement data

##### checkDate: `string`<a id="checkdate-string"></a>

The check date for which to retrieve pay statement data

##### pagesize: `number`<a id="pagesize-number"></a>

Number of records per page. Default value is 25.

##### pagenumber: `number`<a id="pagenumber-number"></a>

Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.

##### includetotalcount: `boolean`<a id="includetotalcount-boolean"></a>

Whether to include the total record count in the header\'s X-Pcty-Total-Count property. Default value is true.

##### codegroup: `string`<a id="codegroup-string"></a>

Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.

#### 🔄 Return<a id="🔄-return"></a>

[PayStatementSummary](./models/pay-statement-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.primaryStateTax.addOrUpdateTax`<a id="paylocityprimarystatetaxaddorupdatetax"></a>

Sends new or updated employee primary state tax information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateTaxResponse = await paylocity.primaryStateTax.addOrUpdateTax({
  companyId: "companyId_example",
  employeeId: "employeeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### amount: `object`<a id="amount-object"></a>

State tax code.<br  /> Max length: 50

##### deductionsAmount: `number`<a id="deductionsamount-number"></a>

Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)

##### dependentsAmount: `number`<a id="dependentsamount-number"></a>

Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)

##### exemptions: `object`<a id="exemptions-object"></a>

State tax exemptions value.<br  />Decimal (12,2)

##### exemptions2: `object`<a id="exemptions2-object"></a>

State tax exemptions 2 value.<br  />Decimal (12,2)

##### filingStatus: `object`<a id="filingstatus-object"></a>

Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50

##### higherRate: `boolean`<a id="higherrate-boolean"></a>

Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean

##### otherIncomeAmount: `number`<a id="otherincomeamount-number"></a>

Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)

##### percentage: `object`<a id="percentage-object"></a>

State Tax percentage. <br  />Decimal (12,2)

##### specialCheckCalc: `object`<a id="specialcheckcalc-object"></a>

Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10

##### taxCalculationCode: `object`<a id="taxcalculationcode-object"></a>

Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10

##### taxCode: `object`<a id="taxcode-object"></a>

State tax code.<br  /> Max length: 50

##### w4FormYear: `number`<a id="w4formyear-number"></a>

The state W4 form year <br  />Integer

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.sensitiveData.addOrUpdateEmployeeSensitiveData`<a id="paylocitysensitivedataaddorupdateemployeesensitivedata"></a>

Sends new or updated employee sensitive data information directly to Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateEmployeeSensitiveDataResponse =
  await paylocity.sensitiveData.addOrUpdateEmployeeSensitiveData({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

##### disability: `object`<a id="disability-object"></a>

Add or update disability data.

##### ethnicity: `object`<a id="ethnicity-object"></a>

Add or update ethnicity data.

##### gender: `object`<a id="gender-object"></a>

Add or update gender data.

##### veteran: `object`<a id="veteran-object"></a>

Add or update veteran data.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/sensitivedata` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paylocity.sensitiveData.getEmployeeSensitiveData`<a id="paylocitysensitivedatagetemployeesensitivedata"></a>

Gets employee sensitive data information directly from Paylocity Payroll/HR solution.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmployeeSensitiveDataResponse =
  await paylocity.sensitiveData.getEmployeeSensitiveData({
    companyId: "companyId_example",
    employeeId: "employeeId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.                  **Allowable Values:**                  9 char max

##### employeeId: `string`<a id="employeeid-string"></a>

The Paylocity Employee ID. This is a unique value per Paylocity Company ID.  **Allowable Values:**  10 char max

#### 🔄 Return<a id="🔄-return"></a>

[SensitiveData](./models/sensitive-data.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{companyId}/employees/{employeeId}/sensitivedata` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
