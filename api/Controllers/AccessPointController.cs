using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO;
using api.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccessPointController : ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        private readonly IMapper _mapper;

        public AccessPointController(IRepositoryWrapper repositoryWrapper, IMapper mapper)
        {
            _repository = repositoryWrapper;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var AccessPointDTOs = _mapper.Map<IEnumerable<AccessPointDTO>>(await _repository.AccessPoint.GetAllAccessPointAsync());

            return Ok(new ResponseDTO {Success = true, Data = AccessPointDTOs});
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {            
            return Ok(new ResponseDTO {Success = true, Message = "Not implemented"});
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> Post(int id)
        {            
            return Ok(new ResponseDTO {Success = true, Message = "Not implemented"});
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id)
        {            
            return Ok(new ResponseDTO {Success = true, Message = "Not implemented"});
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {            
            return Ok(new ResponseDTO {Success = true, Message = "Not implemented"});
        }
    }
}
