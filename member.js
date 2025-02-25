function skillsMember() {
  // This is a private function
  function addSkill(skill) {
    this.skills.push(skill);
  }

  // This is a private function
  function removeSkill(skill) {
    this.skills = this.skills.filter((s) => s !== skill);
  }

  // This is a public function
  return {
    addSkill,
    removeSkill,
  };
}