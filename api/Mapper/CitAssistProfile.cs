using AutoMapper;
using api.DTO;
using api.Model;

namespace api.Mapper
{
    public class CitAssistProfile : Profile
    {
        public CitAssistProfile ()
        {
            CreateMap<AccessPoint, AccessPointDTO>();
        }
    }
}