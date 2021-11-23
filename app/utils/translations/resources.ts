/* eslint import/order:0 */
/* SCREENS */

import * as CategorySelection from "../../screens/CategorySelection/translations";
import * as Home from "../../screens/Home/translations";
import * as PostList from "../../screens/PostList/translations";

/* COMPONENTS */

/* UTILS */
import * as UI from "utils/ui/translations";

const en = {
  ...CategorySelection.en,
  ...UI.en,
  ...Home.en,
  ...PostList.en,
};

const de = {
  ...UI.de,
  ...CategorySelection.de,
};

const fr = {
  ...UI.fr,
  ...CategorySelection.fr,
};

const sv = {
  ...UI.sv,
  ...CategorySelection.sv,
};

const pt = {
  ...UI.pt,
  ...CategorySelection.pt,
};

const es = {
  ...UI.es,
  ...CategorySelection.es,
};

const ru = {
  ...UI.ru,
  ...CategorySelection.ru,
};

const pl = {
  ...UI.pl,
  ...CategorySelection.pl,
};

const da = {
  ...UI.da,
  ...CategorySelection.da,
};

const zh = {
  ...UI.zh,
  ...CategorySelection.zh,
};

const ms = {
  ...UI.ms,
  ...CategorySelection.ms,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    Home.TranslationKeys,
    PostList.TranslationKeys,
    CategorySelection.TranslationKeys {}

export { en, de, fr, sv, pt, es, pl, ru, da, zh, ms };
