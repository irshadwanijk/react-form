export const errMessages = {
  domicile: "Please select state of your domicile",
  scholarshipCat: "Please select Scholarship Category ",
  schemeType: "Please select scheme type",
  stdName: "Name field can't be empty",
  gender: "Please select your gender",
  dob: "Dob can't be empty",
  mobNumber: "Please enter your mobile number",
  email: "Please enter your email",
  IFSC: "Please enter IFSC code",
  confirmIFSC: "Please confirm IFSC code",
  accNumber: "Account number can't be empty",
  confirmAccNumber: "Please Confirm your account number",
  identification: "Please select identification",
};

export const details = [
  {
    inputs: [
      { label: "Scheme Type", unqId: "schemeType", type: "text" },
      { label: "Name of Student", unqId: "stdName", type: "text" },
      { label: "Date of Birth (DD/MM/YY)", unqId: "dob", type: "date" },
      { label: "Mobile Number", unqId: "mobNumber", type: "number" },
      { label: "Email Id", unqId: "email", type: "email" },
      { label: "Bank IFSC Code", unqId: "IFSC", type: "text" },
      { label: "Confirm IFSC Code", unqId: "confirmIFSC", type: "text" },
      { label: "Bank A/C Number", unqId: "accNumber", type: "number" },
      {
        label: "Confirm A/C Number",
        unqId: "confirmAccNumber",
        type: "number",
      },
    ],
  },
  {
    select: [
      {
        label: "State Of Domicile",
        options: ["Choose your option", "J&K", "Telangana", "Kerala"],
        unqId: "domicile",
      },
      {
        label: "Gender",
        options: ["Choose your option", "Male", "Female"],
        unqId: "gender",
      },
      {
        label: "Scholarship Category",
        options: ["Choose your option", "Metric", "Post-Metric"],
        unqId: "scholarshipCat",
      },
      {
        label: "Identification Detail",
        options: ["Choose your option", "Aadhar Card", "Election Card"],
        unqId: "identification",
      },
    ],
  },
];
