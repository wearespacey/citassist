using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO;
using api.DTO.Request;
using api.Helper;
using api.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using api.SignalR;
using System.Text.Json;
using Microsoft.AspNetCore.SignalR;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [AllowAnonymous]
    public class AssistController : ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        private readonly IMapper _mapper;

        private readonly ArrivalHub _arrivalHub;

        public AssistController(IRepositoryWrapper repositoryWrapper, IMapper mapper, ArrivalHub  arrivalHub)
        {
            _repository = repositoryWrapper;
            _mapper = mapper;
            _arrivalHub = arrivalHub;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PanelDTO userPanel)
        {
            var message = JsonSerializer.Serialize(userPanel);
            await _arrivalHub.SendMessage(userPanel.Name, message);
            return Ok(new ResponseDTO { Success = true, Message = "Not implemented" });
        }
    }

    public class PanelDTO {
        public string Name { get; set; }
    }
}
