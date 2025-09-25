---
layout: "layouts/case-study.njk"
title: "Data Escrows"
postHeader: "Data Escrows"
---

## Short description of the proposal or policy framework

A Data Escrow is a framework to facilitate controlled and secure data sharing through a neutral, trusted third-party intermediary. Instead of data being directly transferred from an owner to a user, it is placed in a secure technological environment called an escrow. Within this escrow, data users can run approved computations (like training an AI model or performing statistical analysis) on the data without ever accessing or copying the raw data itself. 

This is often enabled by Privacy-Enhancing Technologies (PETs) like hardware enclaves, which create a protected space for computation, and cryptographic methods that ensure data remains encrypted even while being processed. The entity operating this system, the Escrow Agent (EA), acts as a fiduciary, making nuanced judgments on data use based on the rules set by data providers and the requests of data users.

## What problem did this project seek to address?

This framework addresses a critical dilemma in the digital economy: the tension between data utility and data privacy. Many organizations possess valuable data that could be used to solve major societal problems, like curing diseases or building better technology. However, they cannot share this data due to significant privacy, legal, and competitive risks, leaving it locked in isolated "silos". The alternative, sharing data openly, often means a complete loss of control, exposing it to potential misuse and exploitation. 

Data escrows create a viable middle path, enabling valuable data to be used for computation and analysis without compromising the confidentiality of the source data, thus unlocking its value while protecting its integrity.

## Was this developed in partnership with any organization or in response to a call for submissions, etc?

The concept of Data Escrows has been developed in close connection with the principles of the Data Freedom Act, which proposes the formation of data coalitions, and the broader Data Dignity movement championed by RadicalxChange Foundation. Technical architectures for such a system have been developed by researchers like Raul Castro Fernandez. This work is a direct response to the need for practical, technical infrastructure to make such collective data governance a reality.

## How does this support more democratic outcomes?

Data escrows provide a technical backbone for data coalitions (such as data unions and cooperatives) to function effectively, thereby fostering a more democratic and equitable data economy in several ways:

- **Enhances Transparency and Accountability**: Data escrows are designed to maintain a complete, tamper-proof audit trail of every computation and data access request. This allows for independent verification and holds all parties, including powerful AI developers and the escrow agents themselves, accountable for their use of data.
- **Facilitates Fair Compensation**: By tracking the provenance of data and its contribution to valuable outputs (like trained AI models), escrows can help ensure that data coalitions and their members are fairly compensated for the value their data creates.
- **Enables Fiduciary Duty**: By placing a trusted Escrow Agent at the center, the framework ensures that decisions about data are made with a fiduciary responsibility to the data producers, rather than purely for the profit of the data user.
- **Empowers Collective Action**: They provide the secure infrastructure for groups to pool their data and collectively negotiate its use, acting as a powerful countervailing force to the monopolistic power of large tech companies.

## Who are the key audiences or communities of participants?

The primary participants in a data escrow ecosystem are:

- **Data Owners**: Individuals, communities, and organizations that possess data and wish to make it available for use under specific conditions. They deposit their data into the escrow.
- **Data Users**: Researchers, AI developers, and other organizations that want to derive insights from data by running computations within the escrow.
- **Escrow Agents (EAs)**: Neutral, trusted third-party organizations responsible for operating the data escrow, enforcing the rules set by data owners, and making judgments about data use requests.
- **Data Coalitions**: Intermediary organizations like data unions, trusts, or co-ops that represent the collective interests of data owners, managing their data and negotiating terms of use on their behalf.
- **Auditors and Regulators**: Independent bodies authorized to review the escrow's immutable logs to ensure compliance, fairness, and accountability.

## Were there any related events, outcomes or impacts?

N/A

## Are there any testimonials, documents, assets, links or other ways we can illustrate this project?

- [**Data Coalitions and Escrow Agents](https://www.radicalxchange.org/media/documents/data-coalitions-and-escrow-agents.pdf) - RadicalxChange**
- [**Data Station: Delegated, Trustworthy, and Auditable Computation to Enable Data-Sharing Consortia with a Data Escrow](https://raulcastrofernandez.com/papers/data_station_paper-11.pdf) - Raul Castro Fernandez**
- [**Controlling Dataflows with a Bolt-on Data Escrow](https://arxiv.org/pdf/2408.01580) - Raul Castro Fernandez**