module.exports = (template, operator) => {
  let output = template.replace(/{%NAME%}/g, operator.name);
  output = output.replace(/{%ID%}/g, operator.id);
  output = output.replace(/{%DESCRIPTION%}/g, operator.description);
  output = output.replace(/{%ROLE%}/g, operator.role);
  output = output.replace(/{%GADGET%}/g, operator.gadget);
  output = output.replace(/{%PRIMARY_WEAPONS%}/g, operator.primary_weapons);
  output = output.replace(/{%SECONDARY_WEAPONS%}/g, operator.secondary_weapons);
  output = output.replace(/{%ARMOR%}/g, operator.armor);
  output = output.replace(/{%SPEED%}/g, operator.speed);
  output = output.replace(/{%UNIT%}/g, operator.unit);
  output = output.replace(/{%IMAGE%}/g, operator.image);
  return output;
};
