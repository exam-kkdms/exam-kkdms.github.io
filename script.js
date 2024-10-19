const passwords = {
    "Balvatika 1": "Balv1@2024!",
    "Balvatika 2": "Balv2#2024$",
    "Balvatika 3": "Balv3%2024^",
    "Class 1 A": "C1A@2024*",
    "Class 1 B": "C1B&2024*",
    "Class 2": "C2@2024#",
    "Class 3 A": "C3A%2024$",
    "Class 3 B": "C3B^2024!",
    "Class 4 A": "C4A@2024&",
    "Class 4 B": "C4B#2024*",
    "Class 5": "C5@2024!",
    "Class 6 A": "C6A#2024$",
    "Class 6 B": "C6B%2024^",
    "Class 7 A": "C7A@2024*",
    "Class 7 B": "C7B&2024!",
    "Class 8": "C8@2024#",
    "Class 9": "C9%2024^",
    "Class 10": "C10@2024*",
    "Class 11 Arts": "C11A#2024$",
    "Class 11 Commerce": "C11C%2024^",
    "Class 11 Science": "C11S@2024!",
    "Class 12 Arts": "C12A#2024$",
    "Class 12 Science": "C12S%2024^",
};

const links = {
    "Balvatika 1": "https://docs.google.com/spreadsheets/d/1uOVS_s3Um2EfIf_9DcZr_mOvuktWIYyNmdp8xYeGfow/edit?usp=sharing",
    "Balvatika 2": "https://docs.google.com/spreadsheets/d/1EzNZcgkx5CX4emxfzvKpdjig0BwyWyLcR87hl7Y8iLg/edit?usp=sharing",
    "Balvatika 3": "https://docs.google.com/spreadsheets/d/193PsM523HwC-TpaFS9XwWkaNMR1zLmMJL-iqKoqnTog/edit?usp=sharing",
    "Class 1 A": "https://docs.google.com/spreadsheets/d/1wwKyjyzJVu9MeL487NInXRkFcNatKSosONqdDXVtMOc/edit?usp=sharing",
    "Class 1 B": "https://docs.google.com/spreadsheets/d/1DNuLDC6kPjbYaAW60aBC2yPFmN12bgT_Nx4Y-0MD9_Y/edit?usp=sharing",
    "Class 2": "https://docs.google.com/spreadsheets/d/1WM7_1oMPxb1-mJfgVGBCk8yEa-3Gw0Po3EaYurmJfWg/edit?usp=sharing",
    "Class 3 A": "https://docs.google.com/spreadsheets/d/1C2ghyEiqV8wBR6BZHzTvUvaTcD-xHUH06dNmm-Yeuuk/edit?usp=sharing",
    "Class 3 B": "https://docs.google.com/spreadsheets/d/1Iyt3ysQGfNEbisYkGjTEDMjKpB338RAB3-eTwI-FBYI/edit?usp=sharing",
    "Class 4 A": "https://docs.google.com/spreadsheets/d/1DhE07GWtC1CK1tHciplddIVYu0989sWG7mBqWBxMDNg/edit?usp=sharing",
    "Class 4 B": "https://docs.google.com/spreadsheets/d/15OmPXtJ4sDbtKimd20TQzGkrlU3k1vAi50in9LB031s/edit?usp=sharing",
    "Class 5": "https://docs.google.com/spreadsheets/d/1UzE-MkQl7P3QW_RpQyUYo4HE3tw2sUgcf0_13ZtYfEs/edit?usp=sharing",
    "Class 6 A": "https://docs.google.com/spreadsheets/d/1tIiqyXQX6tN4bAC6IO7jir1AAOA9wASluNFIvjfYPy8/edit?usp=sharing",
    "Class 6 B": "https://docs.google.com/spreadsheets/d/18l_rrTSjl1R9jccaR5--krT9w2iH4YKI62XgblhGfmo/edit?usp=sharing",
    "Class 7 A": "https://docs.google.com/spreadsheets/d/1B0qId4CHgH9zqEO7Y-O3HU5Krzwn1nZV1fHkAUUiBG8/edit?usp=sharing",
    "Class 7 B": "https://docs.google.com/spreadsheets/d/1lxt2Gyt3cM6RoLJJOIsxGmafJH7UukisDVwZafIiCco/edit?usp=sharing",
    "Class 8": "https://docs.google.com/spreadsheets/d/1Ln1J_iVgLDj0tNFA1qkdQhytqGB1o6MO2mHf7BUajJQ/edit?usp=sharing",
    "Class 9": "https://docs.google.com/spreadsheets/d/1Hrcnrqx-v-9yqcGQf88Xz6LdoymOA_15ZFqhhCZe4KU/edit?usp=sharing",
    "Class 10": "https://docs.google.com/spreadsheets/d/1_je9gbAz0uVur1u0ZdiV3kEO0Del6Sc8Tg3wxRqqSK0/edit?usp=sharing",
    "Class 11 Arts": "https://example.com/class11arts",
    "Class 11 Commerce": "https://example.com/class11commerce",
    "Class 11 Science": "https://example.com/class11science",
    "Class 12 Arts": "https://example.com/class12arts",
    "Class 12 Science": "https://example.com/class12science",
};

document.getElementById('viewButton').addEventListener('click', () => {
    const selectedClass = document.getElementById('classDropdown').value;
    if (!selectedClass) {
        alert('Please select a class.');
        return;
    }

    const password = prompt('Enter the password for ' + selectedClass);
    if (password === passwords[selectedClass]) {
        document.getElementById('syllabusFrame').src = links[selectedClass];
        document.getElementById('syllabusFrame').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
});
