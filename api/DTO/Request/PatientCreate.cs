using System;

namespace api.DTO.Request
{
    public class PatientCreate
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime? BirthDate { get; set; }
        public string phone { get; set; }
        public bool? hasHelper { get; set; }
        public bool? hasDogAssistance { get; set; }
        public bool? hasWheelchair { get; set; }
        public bool? hasVisualDisability { get; set; }
        public bool? hasMotorDisability { get; set; }
        public bool? hasPhysicalDisability { get; set; }
        public bool? hasMentalDisability { get; set; }
        public bool? hasCommunicationDisability { get; set; }
        public bool? hasDirectionDisability { get; set; }      
    }
}