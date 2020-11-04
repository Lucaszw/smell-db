const QCM = [
    {name: "Aluminium"},
    {name: "Aluminium Oxide (Al2O3)"},
    {name: "Cellulose (on SiO2)"},
    {name: "His-tag Capturing"},
    {name: "Hydroxyapatite"},
    {name: "Iron (Fe)"},
    {name: "Nylon '6,6'"},
    {name: "Silicon Carbide (SiC)"},
    {name: "Silicon Dioxide (SiO2)"},
    {name: "Silicon Oxycarbide (SiOC)"},
    {name: "Stainless Steel (L605)"},
    {name: "Titanium (Ti)"},
    {name: "Zinc Oxide (ZnO)"},
    {name: "Zirconium Oxide (ZrO)"},
    {name: "Standardized used cooking oil"},
    {name: "Mixed starch, colored"},
    {name: "Egg Yolk, double"},
    {name: "Coffee with milk"}
];

const SPR = [
    {name: "dextran"},
    {name: "carboxymethyl"},
    {name: "alginate"},
    {name: "Immobilized streptavidin"},
    {name: "Immobilized NTA"},
    {name: "Immobilized Protein A"},
    {name: "Lipophilic modification"},
    {name: "Hydrophobic surface"},
    {name: "Plain gold surface"}
];

const coupling = [
    {name: "Covalent coupling"},
    {name: "Amine-carboxyl or –CHO based"},
    {name: "Disulfide-based"},
    {name: "Affinity capture"},
    {name: "Biotin-avidin based"},
    {name: "Ni-NTA based"},
    {name: "Antibody based"},
    {name: "Protein A-IgG based"}
];

const gasSensors = [
    {name: "MQ-2"},
    {name: "MQ-3"},
    {name: "MQ-4"},
    {name: "MQ-5"},
    {name: "MQ-6"},
    {name: "MQ-7"},
    {name: "MQ-8"},
    {name: "MQ-9"},
    {name: "MQ-135"}
];

const other = [
    {name: "humidity"},
    {name: "temperature"}
];

export default [
    {category: "QCM", sensors: QCM},
    {category: "SPR", sensors: SPR},
    {category: "Gas", sensors: gasSensors},
    {category: "Other", sensors: other}
];