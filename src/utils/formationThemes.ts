export type FormationThemeKey =
  | 'sst'
  | 'mac-sst'
  | 'psc1'
  | 'gestes-qui-sauvent'
  | 'pse1'
  | 'pse2'
  | 'epi'
  | 'extincteur'
  | 'evacuation';

type FormationTheme = {
  gradient: string;
  button: string;
  text: string;
};

export const formationThemes: Record<FormationThemeKey, FormationTheme> = {
  sst: {
    gradient: 'from-[#7f1d1d] to-[#450a0a]',
    button: 'bg-[#7f1d1d] text-white hover:bg-[#450a0a]',
    text: 'text-[#7f1d1d]'
  },
  'mac-sst': {
    gradient: 'from-[#9a3412] to-[#5a1f08]',
    button: 'bg-[#9a3412] text-white hover:bg-[#5a1f08]',
    text: 'text-[#9a3412]'
  },
  psc1: {
    gradient: 'from-[#1e3a8a] to-[#172554]',
    button: 'bg-[#1e3a8a] text-white hover:bg-[#172554]',
    text: 'text-[#1e3a8a]'
  },
  'gestes-qui-sauvent': {
    gradient: 'from-[#166534] to-[#052e16]',
    button: 'bg-[#166534] text-white hover:bg-[#052e16]',
    text: 'text-[#166534]'
  },
  pse1: {
    gradient: 'from-[#4c1d95] to-[#2e1065]',
    button: 'bg-[#4c1d95] text-white hover:bg-[#2e1065]',
    text: 'text-[#4c1d95]'
  },
  pse2: {
    gradient: 'from-[#312e81] to-[#1e1b4b]',
    button: 'bg-[#312e81] text-white hover:bg-[#1e1b4b]',
    text: 'text-[#312e81]'
  },
  epi: {
    gradient: 'from-[#7c2d12] to-[#431407]',
    button: 'bg-[#7c2d12] text-white hover:bg-[#431407]',
    text: 'text-[#7c2d12]'
  },
  extincteur: {
    gradient: 'from-[#9f1239] to-[#5f0f1b]',
    button: 'bg-[#9f1239] text-white hover:bg-[#5f0f1b]',
    text: 'text-[#9f1239]'
  },
  evacuation: {
    gradient: 'from-[#713f0d] to-[#3b1b05]',
    button: 'bg-[#713f0d] text-white hover:bg-[#3b1b05]',
    text: 'text-[#713f0d]'
  }
};

export const formationThemeKeys = Object.keys(formationThemes) as FormationThemeKey[];

type SupportedHomeCard =
  | 'sst'
  | 'psc1'
  | 'epi'
  | 'gestes-qui-sauvent'
  | 'pse1'
  | 'extincteur';

export const getFormationTheme = (slug: FormationThemeKey | SupportedHomeCard) =>
  formationThemes[slug as FormationThemeKey];
