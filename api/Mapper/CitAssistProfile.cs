using AutoMapper;
using api.DTO;
using api.Model;

namespace api.Mapper
{
    public class CitAssistProfile : Profile
    {
        public CitAssistProfile()
        {
            CreateMap<AccessPoint, AccessPointDTO>();
            CreateMap<City, CityDTO>();
            CreateMap<Country, CountryDTO>();
            CreateMap<Street, StreetDTO>();
            CreateMap<Account, AccountDTO>();
            CreateMap<Patient, PatientDTO>();
            CreateMap<UsualLanguage, UsualLanguageDTO>();
        }
    }
}