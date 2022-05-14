import dbblLogo from "./public/images/banks-logo/dbbl.jpg";
import alArafah from "./public/images/banks-logo/al-arafah.jpg";
import ucblogo from "./public/images/banks-logo/ucb.png";
import sonalilogo from "./public/images/banks-logo/sonalibd.jpg";
import ificlogo from "./public/images/banks-logo/ific.jpg";
import standlogo from "./public/images/banks-logo/standardlogo.png";
import citylogo from "./public/images/banks-logo/citybanklogo.jpg";
import nrbclogo from "./public/images/banks-logo/nrbclogo.png";
import ncclogo from "./public/images/banks-logo/ncclogo.jpg";
import grameenlogo from "./public/images/banks-logo/grameenlogo.jpeg";
import rupalilogo from "./public/images/banks-logo/rupalilogo.jpg";
import pubalilogo from "./public/images/banks-logo/pubali.jpg";


const allBanks = [
	{
		title: "Dutch Bangla Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "Dutch-Bangla Bank",
			logo: dbblLogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Al-Arafah Islami Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: alArafah,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Sonali Bank Limited",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: sonalilogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	
	{
		title: "United Commercial Bank",
		bankType: "public",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: ucblogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Standard Charted Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: standlogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "IFIC Bank",
		bankType: "public",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders spearheaded by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: ificlogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	
	{
		title: "City Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: citylogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "NRBC Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: nrbclogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "NCC Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: ncclogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Grameen Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: grameenlogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Rupali Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: rupalilogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
	{
		title: "Pubali Bank",
		bankType: "private",
		about:
			"Dutch-Bangla Bank started operation is Bangladesh's first joint venture bank. The bank was an effort by local shareholders lorem dfe egade fill by M Sahabuddin Ahmed (founder chairman) and the Dutch company FMO. From the onset, the focus of the bank has been financing high-growth manufacturing industries in Bangladesh.",
		details: {
			registerdName: "",
			logo: pubalilogo,
			established: "1995",
			type: "Private Bank",
			services: [
				"Personal Banking",
				"Corporate Banking",
				"Deposits and Advances",
				"SME Banking",
				"Agent Banking",
			],
			telephone: "43653463",
			email: "hrd@dutchbanglabank.com",
			website: "www.dutchbanglabank.com",
			swiftCode: "DSFGDFGR",
			code: "090",
		},
		branches: [
			{
				branchName: "Barisal",
				district: "Barisal",
				routingNo: "090010071",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				branchName: "Bogra",
				district: "Bogra",
				routingNo: "46546546",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				branchName: "Ashuganj",
				district: "Brahmanbaria",
				routingNo: "23432454",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		atms: [
			{
				boothName: "Barisal",
				district: "Barisal",
				address: "Monsur Mansion, 101 Sadar Road, Barisal",
			},
			{
				boothName: "Bogra",
				district: "Bogra",
				address: "324 Kazi Nazrul Islam Sarak, Jhawtala, Bogra",
			},
			{
				boothName: "Ashuganj",
				district: "Brahmanbaria",
				address: "Kashem Plaza, Ashuganj Sadar, Brahmanbaria",
			},
		],
		loans: [
			{
				loanTitle: "DBBL Jokhon Tokhon Personal Loan",
				loanType: "personal",
				description:
					'Are you planning to take a loan facility to own the vehicle of your choice and ensure a comfortable and safe ride for you and your family? Now Dutch-Bangla Bank offers such a car loan to fulfill your purpose, namely "DBBL Car Loan - Prottasha". This loan offers maximum BDT 40,00,000.00 of maximum 5 years of tenure.',
				purposeOfLoan: [
					"New and reconditioned vehicles for personal use only.",
					"Refinance of an own availed car (date of purchase no later than 1 year).",
				],
				loanAmount: [
					"Minimum BDT 1,00,000.00.",
					"Maximum BDT 40,00,000.00 or, 50% of the car value whichever is lower.",
				],
				whoCanApply: [
					"Minimum 18 years of old.",
					"Maximum 70 years of old (at the end of loan tenure).",
				],
				customerSegment: [
					"Salaries Executives",
					"Professionals (Doctors, Architects, Engineers, Chartered Accountants, etc.)",
					"Landlords/ Landladies",
					"Self employed",
				],
			},
		],
	},
];

export { allBanks };
