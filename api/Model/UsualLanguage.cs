using System.Collections.Generic;

namespace api.Model
{
    public class UsualLanguage
    {
        public UsualLanguage()
        {
            Patients = new HashSet<Patient>();
        }
        public int Id { get; set; }
        public string Code { get; set; }

        public virtual IEnumerable<Patient> Patients { get; set; }
    }
}