---
layout: "layouts/wiki-page.njk"
title: "Quadratic Voting in New York City"
slug: "nyc-qv"
---
[toc]

In the spring of 2023, RadicalxChange (RxC) collaborated with Secure Internet Voting (SIV) and former New York City Council Member Kristin Richardson Jordan to conduct a Participatory Budgeting (PB) poll in Harlem District 9 using Quadratic Voting (QV). This was, to our knowledge, the first time a public official in the US has used online QV in a process open to their whole constituency. 
RxC and SIV executed this project as a medium-scale pilot, in the hopes of providing the Council Member with insight into her constituents’ views on the PB proposals, and to explore the viability of open, online QV processes. The project met its primary goals and demonstrated a reasonably low-overhead process for conducting a secure, verified QV process online.

## Project Goals

1. Conduct a PB poll in Harlem District 9, inviting residents to vote on their top priorities from a selection of spending proposals.

2. Make the PB process more accessible by enabling residents to vote at their convenience using a secure online voting platform.

3. Use QV to capture a detailed representation of residents' preferences.

4. Develop a replicable process that can be utilized in other districts.

## Implementation

1. The Council Member's office conducted a comprehensive district needs survey, gathering spending proposals from Community Boards and constituents.

2. Information about the PB process was disseminated through Community Boards, physical mailers, and emails, directing residents to register at harlemwallet.org.

3. To ensure eligibility, SIV and RxC cross-referenced all registrants against the voter rolls, and any discrepancies were addressed via email communication.

4. SIV and RxC used postal verification, sending a letter with a unique QR code and unique manual entry code to each registrant. This step validated the residency of the participants and minimized potential fraud.

5. Once validated, registrants could log into the voting system, view the list of District 9 spending proposals, and vote using QV.

## Results Summary

### Registration

In the registration process, 20% of registrants were not found in the voter roll, and were therefore not sent a voting link. This may be due to outdated voter roll information, typographical errors during registration, or because ineligible persons were attempting to participate.

### Voting

Participants who voted reported an 80% satisfaction rate with the voting process. However, around 18% of participants did not utilize their entire QV budget, indicating that some voters may not have fully understood the QV interface.

SIV and RadicalxChange took the following measures to ensure that all voters understand the voting process enough to express their preferences accurately: (1) a textual guide to voting at the top of the web page, (2) a video demonstration embedded at the top of the web page, (3) a graphical interface that represents voice credits as blocks, showing users how many votes they have cast and how many more voice credits they have in their budget, and (4) a popup window that appears on submission and reminds users if they still have more voice credits to spend (i.e. “you still have X voice credits remaining. Are you sure you want to submit?”). Nonetheless, there is a clear need for continued user education and interface optimization. We believe that the results of any new public voting procedure should be interpreted as potentially unrepresentative of the voting body until there is a high degree of confidence that the entire public understands the procedure; and we are working towards meeting that bar in our QV experiments.

### QV Results

The results of the voting process are displayed on the graph below. For more information about the spending proposals, see the appendix below.

![Harlem Wallet QV Results](/images/wiki/harlem-wallet-qv-results.png)

## Contact Us About Participatory Budgeting with QV

The pilot demonstrated that online Quadratic Voting can be a secure and practical method for taking polls or informing collective decisions in a local government setting. The most important factors for ensuring a robust process are maximizing access to and understanding of the voting process.

In light of the promising results and learnings from this pilot, we are poised to replicate this project to support other public engagement efforts. If you are a public official interested in piloting online QV for participatory budgeting or a similar public consultation, please contact the [RadicalxChange Foundation](mailto:info@radicalxchange.org) for more information.

## Appendix

### Expanded QV Results

1. **The Baxter** (136 votes) - $1,000,000 - Broadway Housing Community plans to develop between 150-175 units of affordable housing over the next 5 years at two properties: 222-226 W 145th Street and 673 St Nicholas Avenue. All units will be below 80% AMI. Tenants of the project will be able to access BHC's tenant services, educational programs, and cultural arts programs.

2. **Marcus Garvey Playground** (119 votes)	- $275,000 - Funding to support the construction of a green playground in Marcus Garvey Park.

3. **Harlem River Park** (100 votes) - $250,000	- Funding to support climate resiliency efforts and park revitalization projects at Harlem River Park.

4. **Timbale Terrace** (94 votes) - $250,000 - 341 mixed-income housing project, 100 supportive housing units included developed by the Lantern Organization. Located at Park Avenue in between E 118th and E 119th Streets.

5. **Dance Theater of Harlem** (93 votes) - $250,000 - Funding to support the installation of a new HVAC, boiler, and fire panel systems replacing the organization's energy inefficient and outdated systems.

6. **PS 46 Auditorium**	(88 votes) - $200,000 - The need is a refurbishment or renovation of the floors, the walls, the sound system, the stage, the lighting system, and the seating in the auditorium.

7. **Courtney Callendar Park** (84 votes) - $250,000 - Reworking of plumbing system to aid in the construction of public restrooms in the park.

8. **PS 130** (83 votes) - $175,000 - Classroom upgrades to technology as part of the Advancing Classroom Technologies Initiative.

9. **PS 149** (80 votes) - $475,000 - Funding to support auditorium and gym updates for PS 149.

10. **PS 46 Gym** (76 votes) - $100,000 - The ask is the replacement of the gym floor with regulation flooring; the replacement of the basketball hoops; and the addition of climbing wall and adaptive, sensory gym equipment for special needs students.

11. **Parks Department** (68 votes) - $50,000 - Funding to support composting bins, mural construction, and revitalization of the Abyssinian Tot-Lot at 130 W 139th Street.

12. **Frederick Samuels Community Center** (66 votes) - $250,000 - Funding to support upgrades to the kitchen, gym, and classroom facilities in the Community Center.

### Screenshots

![Registration form](/images/wiki/harlem-registration-form.png)

The registration form at harlemwallet.org.

![Address verification letter](/images/wiki/harlem-letter.png)

This letter was sent to registrants who passed the voter roll check, in order to verify the in-district mailing address they provided. Each registrant received a unique authentication code and QR code.

![The voting interface asks for an authentication code](/images/wiki/harlem-auth-code.png)

The voting page at harlemwallet.org/voice prompted users to enter the unique authentication code from the letter that was mailed to the address they provided on registration. If they navigated to the site by scanning the QR code on the letter, their authentication code was recognized automatically.

![The voting page provides voting instructions](/images/wiki/harlem-qv-instructions.png)

The voting web page included instructions and a video demo on how to vote using QV.

![Graphical QV interface](/images/wiki/harlem-qv-interface.png)

The voting page utilized a graphical interface adapted from [RxC QV](https://quadraticvote.radicalxchange.org/) to make QV more intuitive for users.

![Submissions warning message](/images/wiki/harlem-submit-confirmation.png)

When users clicked the "submit" button, the page displayed this warning message to inform users when they had voice credits left over before saving their votes.